import { NavLink } from "react-router-dom";
import { moreFromAuthorNfts } from "../data/nfts";
import timerIcon from "../assets/Timer Icon.svg";
import heartIcon from "../assets/Heart Icon.svg";
import heartIcon2 from "../assets/Heart Icon Filled.svg";

function MoreFromAuthor() {
  return (
    <div className="px-10 py-20 lg:px-20 lg:py-28">
      <div className="flex flex-col items-center gap-8">
        <p className="text-[#7780A1] font-[500]">OVERLINE</p>
        <h1 className="font-[600] text-2xl lg:text-4xl lg:text-[64px] lg:mb-6">
          More from this author
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20 md:gap-4 mt-16 justify-between overflow-x-hidden">
        {moreFromAuthorNfts.map((nft) => (
          <div
            key={nft.id}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="">
              <img
                className="rounded-[20px] w-[212px]  h-[355px]"
                src={nft.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-[600] mt-5">{nft.name}</h3>
              <div className="flex gap-6 justify-between items-center my-3">
                <p className="flex items-center gap-1 ">
                  <img src={timerIcon} alt="" />
                  <span className="text-[14px]">{nft.durationLeft}</span>
                </p>
                <button className="rounded-[4px] text-[#514CFF] font-[600] bg-[#514CFF26] px-[13px] py-2">
                  <span>{nft.price}</span>
                  ETH
                </button>
              </div>
              <hr className="h-[1px] bg-[#262840] w-full my-5" />
              <div className="flex justify-between items-center">
                <p className="ml-4 mr-10 text-[14px] text-[#7780A1]">
                  {nft.numbersOfPeopleBidding} people are bidding
                </p>
                <div>
                  {nft.liked ? (
                    <img src={heartIcon2} alt="" />
                  ) : (
                    <img src={heartIcon} alt="" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-14 mb-20">
        <NavLink to="/">
          <button className="bg-[#141625] border-2 border-[#262840] p-3 md:px-6 md:py-4 rounded-xl text-[#7780A1] font-[600]">
            Show me more
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default MoreFromAuthor;
