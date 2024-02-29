import { NavLink } from "react-router-dom";
import sapienImage from "../assets/SapienImage.png";
import arrowRight from "../assets/arrowRight.svg";
import { hottestNfts, topNfts } from "../data/nfts";
import timerIcon from "../assets/Timer Icon.svg";
import heartIcon from "../assets/Heart Icon.svg";
import heartIcon2 from "../assets/Heart Icon Filled.svg";
import threedots from "../assets/threedots.svg";
import handImage from "../assets/handImage.png";
import habitantImg from "../assets/habitantImg.png";
import soliciImg from "../assets/soliciIcon.svg";
import pulvinarImg from "../assets/pulvinaIcon.svg";

function Sapien() {
  return (
    <div className="px-14 py-20 lg:px-20 lg:py-28">
      <div className="flex justify-between gap-4 items-center">
        <div className="flex-1 lg:pr-16">
          <p className="text-[#7780A1] font-[500] mb-5">OVERLINE</p>
          <h1 className="text-white font-[600] text-3xl lg:text-6xl lg:text-[64px]">
            Sapien ipsum scelerisque convallis fusce
          </h1>
          <p className="text-[#7780A1] my-10">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
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
        <div className="flex-1">
          <img src={sapienImage} alt="" />
        </div>
      </div>
      <div className="flex flex-col overflow-y-hidden lg:flex-row justify-between items-center gap-10 mt-20">
        <div className="md:wd-[448px] md:h-[900px] flex-1 border-[1px] border-[#545886] rounded-[20px] pl-6">
          <h1 className="text-2xl md:text-3xl font-[600] md:text-[32px] my-8">
            Check out the hottest Sale offers
          </h1>
          <div className="relative overflow-x-hidden">
            <div className="flex gap-5">
              {hottestNfts.map((nft) => (
                <div key={nft.id}>
                  <div className="flex justify-center">
                    <img
                      className="rounded-xl w-[212px] h-[355px]"
                      src={nft.image}
                      alt=""
                    />
                  </div>
                  <h3 className="font-bold md:text-xl mt-5">{nft.name}</h3>
                  <div className="flex gap-6 justify-between items-center my-3">
                    <p className="flex items-center gap-1 ">
                      <img src={timerIcon} alt="" />
                      <span className="text-[14px]">{nft.durationLeft}</span>
                    </p>
                    <button className="rounded-[4px] text-[#514CFF] font-[600] bg-[#514CFF26] px-[14px] py-2">
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
              ))}
            </div>
            <div className="h-[120px] w-[120px] absolute top-[50%] right-[-60px] translate-y-[-50%]">
              <img
                className="bg-[#262840] p-6 rounded-full"
                src={arrowRight}
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 mb-8 mr-6">
            <NavLink to="/">
              <button className="bg-[#141625] border-2 border-[#7780A1] px-6 py-4 rounded-xl text-white font-[600] w-full hover:scale-90 transition-all delay-150 ease-linear">
                Show me more
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex-1 ">
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
            className="flex flex-col justify-between md:wd-[448px] lg:h-[900px] border-[1px] rounded-[20px] rounded-tl-none"
          >
            <img className="rounded-tr-[20px]" src={handImage} alt="" />
            <div className="my-8 mx-6">
              <h2 className="md:text-2xl font-[600]">
                Get started creating & selling your NFTs
              </h2>
              <p className="text-[#7780A1] text-[14px]">
                Nunc gravida faucibus netus feugiat tellus, viverra massa
                feugiat. Mi est sit.
              </p>
              <div className="mt-14">
                <NavLink to="/">
                  <button className="border-2 border-[#4745D0] bg-gradient-to-r from-[#4745D0] from-0% to-[#2A27C9] to-60% p-3 md:px-6 md:py-4 rounded-xl text-white font-[600] w-full hover:scale-90 transition-all delay-150 ease-linear">
                    Get started
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="md:wd-[448px] md:h-[900px] flex-1 border-[1px] border-[#545886] rounded-[20px] pt-7 px-6">
          <h1 className="text-2xl md:text-3xl md:text-[32px] font-[600]">
            Top NFT at a lower price
          </h1>
          <div className="flex flex-col gap-12 mt-10">
            {topNfts.map((nft) => (
              <div
                key={nft.id}
                className="flex gap-2 justify-between items-center h-[120px]"
              >
                <div className="flex justify-center">
                  <img
                    className="rounded-[20px] w-[120px] h-[120px]"
                    src={nft.image}
                    alt=""
                  />
                </div>
                <div>
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
          <div className="mt-14 mb-8 mr-6">
            <NavLink to="/">
              <button className="bg-[#141625] border-2 border-[#7780A1] px-6 py-4 rounded-xl text-white font-[600] w-full hover:scale-90 transition-all delay-150 ease-linear">
                Show me more
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 lg:gap-16 mt-28">
        <div className="flex-1">
          <img src={habitantImg} alt="" />
        </div>
        <div className="flex-1">
          <p className="text-[#7780A1] font-[500] mb-5">OVERLINE</p>
          <h1 className="text-white font-[600] text-3xl lg:text-6xl lg:text-[64px]">
            Habitant tristique aliquam in vel scelerisque
          </h1>
          <p className="text-[#7780A1] my-10">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="flex gap-8 mb-8">
            <div>
              <img src={soliciImg} alt="" />
              <h3 className="font-[600] md:text-xl mt-4">
                Sollicitudin sapien
              </h3>
              <p className="text-[#7780A1]">Cursus fermentum</p>
            </div>
            <div>
              <img src={pulvinarImg} alt="" />
              <h3 className="font-[600] md:text-xl mt-4">Pulvinar metus</h3>
              <p className="text-[#7780A1]">Nunc sed</p>
            </div>
          </div>
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
      </div>
    </div>
  );
}

export default Sapien;
