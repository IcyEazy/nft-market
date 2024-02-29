import { NavLink } from "react-router-dom";
import { mostPopularNfts } from "../data/nfts";
import timerIcon from "../assets/Timer Icon.svg";
import heartIcon from "../assets/Heart Icon.svg";
import heartIcon2 from "../assets/Heart Icon Filled.svg";

function MostPopular() {
  return (
    <div className="px-10 py-20 lg:px-20 lg:py-28">
      <div className="flex flex-col items-center gap-8">
        <p className="text-[#7780A1] font-[500]">OVERLINE</p>
        <h1 className="font-[600] text-2xl lg:text-4xl lg:text-[64px] lg:mb-6">
          Most popular live auctions
        </h1>
        <div className="flex gap-4">
          <NavLink to="/architecture">
            <button className="bg-[#141625] border-2 border-[#262840] p-2 rounded-lg text-[#7780A1] font-[600] hover:text-white hover:scale-105 hover:border-white transition-all delay-150 ease-linear">
              Architecture
            </button>
          </NavLink>
          <NavLink to="/photography">
            <button className="bg-[#141625] border-2 border-[#262840] p-2 rounded-lg text-[#7780A1] font-[600] hover:text-white hover:scale-105 hover:border-white transition-all delay-150 ease-linear">
              Photography
            </button>
          </NavLink>
          <NavLink to="/games">
            <button className="bg-[#141625] border-2 border-[#262840] p-2 rounded-lg text-[#7780A1] font-[600] hover:text-white hover:scale-105 hover:border-white transition-all delay-150 ease-linear">
              Games
            </button>
          </NavLink>
          <NavLink to="/music">
            <button className="bg-[#141625] border-2 border-[#262840] p-2 rounded-lg text-[#7780A1] font-[600] hover:text-white hover:scale-105 hover:border-white transition-all delay-150 ease-linear">
              Music
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20 md:gap-4 mt-16 justify-between overflow-x-hidden">
        {mostPopularNfts.map((nft) => (
          <NavLink to={`/${nft.id}`}>
            <div
              key={nft.id}
              className="flex flex-col items-center md:items-start gap-3 hover:scale-110 transition-all delay-150 ease-linear"
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
          </NavLink>
        ))}
      </div>
      <div className="flex justify-center mt-14 mb-20">
        <NavLink to="/">
          <button className="bg-[#141625] border-2 border-[#262840] p-3 md:px-6 md:py-4 rounded-xl text-[#7780A1] font-[600] hover:scale-110 hover:border-white hover:text-white transition-all delay-150 ease-linear">
            Show me more
          </button>
        </NavLink>
      </div>
      <hr className="h-[1px] bg-[#262840] w-full my-5" />
    </div>
  );
}

export default MostPopular;
