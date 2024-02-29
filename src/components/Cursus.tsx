import { nftCollections, nftPersonRecords, nftRecords } from "../data/nfts";
import threedots from "../assets/threedots.svg";
import { NavLink } from "react-router-dom";
import itemsIcon from "../assets/itemsIcon.svg";
import collectionIcon from "../assets/collectionIcon.svg";
import arrowRight from "../assets/arrowRight.svg";
import { useEffect, useRef, useState } from "react";

const TRANSLATE_AMOUNT = 400;

function Cursus() {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target as HTMLDivElement;
      if (container == null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate < container.scrollWidth);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate]);

  return (
    <div>
      <div className="bg-[#141625] pb-20">
        <div className="flex justify-center gap-20 pb-20">
          {nftRecords.map((record) => (
            <div key={record.id} className="flex flex-col items-center gap-2">
              <img src={record.image} alt="" />
              <h1 className="text-xl md:text-3xl lg:text-5xl font-[600]">
                {record.value}
              </h1>
              <p className="text-[#7780A1]">{record.type}</p>
            </div>
          ))}
        </div>
        <div className="px-10 lg:px-20">
          <div className="py-1.5 pl-1 pr-8 bg-[#1B1C28] rounded-tr-[20px] rounded-tl-sm w-[40%]">
            <img className="" src={threedots} alt="" />
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg, #1E1F2B 0%, #1E1F2B 59.9%, #1E1F2B 100%)",
              borderImageSource:
                "linear-gradient(180deg, rgba(30, 31, 43, 0) 0%, #1E1F2B 59.9%, #1E1F2B 100%)",
            }}
            className="flex gap-10 pl-10 py-10 md:gap-4 flex-col md:flex-row border-[1px] rounded-[20px] rounded-tl-none"
          >
            <div className="flex-1 lg:pr-16">
              <p className="text-[#7780A1] font-[500] mb-5">OVERLINE</p>
              <h1 className="text-white font-[600] text-3xl lg:text-6xl lg:text-[64px]">
                Cursus vitae sollicitudin donec nascetur. Join now
              </h1>
              <p className="text-[#7780A1] my-10">
                Donec volutpat bibendum justo, odio aenean congue est porttitor
                ut. Mauris vestibulum eros libero amet tincidunt.
              </p>
              <div className="flex gap-3">
                <NavLink to="/">
                  <button className="border-2 border-[#4745D0] bg-gradient-to-r from-[#4745D0] from-0% to-[#2A27C9] to-60% p-3 md:px-6 md:py-4 rounded-xl text-white font-[600] hover:scale-90 transition-all delay-150 ease-linear">
                    Get started
                  </button>
                </NavLink>
                <NavLink to="/">
                  <button className="bg-[#141625] border-2 border-[#7780A1] p-3 md:px-6 md:py-4 rounded-xl text-white font-[600] hover:scale-90 transition-all delay-150 ease-linear">
                    Learn more
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="flex-1 relative">
              {nftPersonRecords.map((record) => (
                <div
                  style={{
                    border: `${record.active ? "1px solid #262840" : "none"}`,
                    padding: `${record.active ? "10px" : "0px"}`,
                    position: "absolute",
                    top: `${record.top}`,
                    left: `${record.left}`,
                    right: `${record.right}`,
                    opacity: `${record.collections ? "1" : "0.3"}`,
                  }}
                  key={record.id}
                  className=" flex items-center lg:items-start gap-2 rounded-[21.66px]"
                >
                  <div>
                    <img src={record.image} alt="" />
                  </div>
                  {record.active && (
                    <div className="flex flex-col gap-2">
                      <h1 className="font-[600] text-[17.33px]">
                        {record.username}
                      </h1>
                      <div className="flex gap-8">
                        <p className="flex gap-1 items-center text-[#626B8C] text-[14px]">
                          <img src={itemsIcon} alt="" /> Items{" "}
                          <span>{record.items}</span>{" "}
                        </p>
                        {record.collections && (
                          <p className="flex gap-1 items-center text-[#626B8C] text-[14px]">
                            <img src={collectionIcon} alt="" /> Collections{" "}
                            <span>{record.collections}</span>{" "}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  {record.active && (
                    <button className="rounded-[4px] text-[#514CFF] font-[600] bg-[#514CFF26] px-[13px] py-2">
                      <span>{record.amount}</span>
                      ETH
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div ref={containerRef} className="overflow-x-hidden pb-16">
          <div
            style={{ transform: `translateX(-${translate}px)` }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            {nftCollections.map((collection) => (
              <div
                key={collection.id}
                className="flex-shrink-0 hover:scale-110 hover:text-white hover:font-bold transition-all delay-150 ease-linear cursor-pointer"
              >
                <img
                  className="w-[89px] h-[89px] rounded-3xl"
                  src={collection.image}
                  alt=""
                />
                <p className="text-center text-[#7780A1] text-[14px] mt-2">
                  <span>{collection.price}</span> ETH
                </p>
              </div>
            ))}
          </div>
        </div>
        {isLeftVisible && (
          <div
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
            className="h-[120px] w-[120px] absolute top-[50%] left-[10px] translate-y-[30%] cursor-pointer"
          >
            <img
              className="bg-[#262840] p-6 rounded-full rotate-180"
              src={arrowRight}
              alt=""
            />
          </div>
        )}
        {isRightVisible && (
          <div
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edgeOfScroll = containerRef.current.scrollWidth;
                const widthOfVisibleScroll = containerRef.current.clientWidth;
                // console.log(newTranslate, edgeOfScroll, widthOfVisibleScroll);
                if (newTranslate + widthOfVisibleScroll === edgeOfScroll) {
                  return edgeOfScroll - widthOfVisibleScroll;
                } else {
                  return newTranslate;
                }
              });
            }}
            className="h-[120px] w-[120px] absolute top-[50%] right-[-60px] translate-y-[30%] cursor-pointer"
          >
            <img
              className="bg-[#262840] p-6 rounded-full "
              src={arrowRight}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cursus;
