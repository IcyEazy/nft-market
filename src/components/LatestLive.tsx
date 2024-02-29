import timerIcon from "../assets/Timer Icon.svg";
import heartIcon from "../assets/Heart Icon.svg";
import heartIcon2 from "../assets/Heart Icon Filled.svg";
import { nfts } from "../data/nfts";
import arrowRight from "../assets/arrowRight.svg";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const TRANSLATE_AMOUNT = 200;

function LatestLive() {
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
      setIsRightVisible(
        translate + container.clientWidth - 500 < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate]);

  return (
    <div className="relative">
      <h2 className="font-[600] text-center my-10 text-2xl lg:text-4xl">
        Latest live auctions
      </h2>
      <div ref={containerRef} className="overflow-x-hidden">
        <div
          style={{ transform: `translateX(-${translate}px)` }}
          className="flex gap-4 flex-shrink-0"
        >
          {nfts.map((nft) => (
            <NavLink to={`/${nft.id}`}>
              <div
                key={nft.id}
                className="flex-shrink-0 w-[448px] h-[767px] flex flex-col justify-between border-[1px] border-[#545886] rounded-[20px] p-4 hover:scale-90 transition-all delay-150 ease-linear"
              >
                <div className="flex justify-center">
                  <img
                    className="rounded-xl w-[400px] h-[520px]"
                    src={nft.image}
                    alt=""
                  />
                </div>
                <div className="flex gap-6 justify-between items-center my-3">
                  <h3 className="font-bold md:text-xl">{nft.name}</h3>
                  <button className="rounded-[4px] text-[#514CFF] font-[600] bg-[#514CFF26] px-[14px] py-2">
                    <span>{nft.price}</span>
                    ETH
                  </button>
                </div>
                <p className="flex items-center gap-1 ">
                  <img src={timerIcon} alt="" />
                  <span className="text-[14px]">{nft.durationLeft}</span> min
                  left
                </p>
                <hr className="h-[1px] bg-[#262840] w-full my-5" />
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {nft.peopleBiddingImg.map((img) => (
                      <img
                        key={img}
                        className="rounded-[20px]"
                        src={img}
                        alt=""
                      />
                    ))}
                  </div>
                  <p className="ml-4 mr-10 text-[14px] text-[#7780A1]">
                    <span>{nft.numbersOfPeopleBidding}</span> people are bidding
                  </p>

                  <div className="flex gap-1 items-center">
                    <div>
                      {nft.liked ? (
                        <img src={heartIcon2} alt="" />
                      ) : (
                        <img src={heartIcon} alt="" />
                      )}
                    </div>
                    <span className="text-[14px]">{nft.numbersOfLikes}</span>
                  </div>
                </div>
              </div>
            </NavLink>
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
          className="h-[120px] w-[120px] absolute top-[50%] left-[10px] translate-y-[-50%] cursor-pointer"
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
              if (newTranslate + widthOfVisibleScroll >= edgeOfScroll) {
                return edgeOfScroll - widthOfVisibleScroll + 500;
              } else {
                return newTranslate;
              }
            });
          }}
          className="h-[120px] w-[120px] absolute top-[50%] right-[-60px] translate-y-[-50%] cursor-pointer"
        >
          <img
            className="bg-[#262840] p-6 rounded-full "
            src={arrowRight}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default LatestLive;
