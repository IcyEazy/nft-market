import { NavLink } from "react-router-dom";
import detailsImg from "../assets/detailsImg.png";
import arrowSlide from "../assets/Arrow Slide.svg";
import brook from "../assets/brook.png";
import avatar from "../assets/Avatar.svg";
import graph from "../assets/graph.png";

function NftDetail() {
  return (
    <div className="px-10 lg:px-20 pt-10 pb-12">
      <div className="border-[1px] border-[#262840] p-5 rounded-[20px] flex flex-col gap-20 md:flex-row items-center">
        <div className="relative flex-1">
          <img className="rounded-[20px]" src={detailsImg} alt="" />
          <img
            className="absolute bottom-0 right-[50%] translate-x-[50%]"
            src={arrowSlide}
            alt=""
          />
        </div>
        <div className=" flex-1 py-5">
          <div>
            <h1 className="text-3xl lg:text-4xl lg:text-[40px] font-[600] mb-4">
              Dui accumsan leo vestibulum ornare
            </h1>
            <p className="text-[#7780A1]">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
          </div>
          <div className="flex gap-8 items-cente mt-3">
            <div className="flex gap-4 items-center">
              <img src={brook} alt="" />
              <p className="flex flex-col">
                <span className="text-[#7780A1]">Creator</span>
                <span>@brook</span>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={avatar} alt="" />
              <p className="flex flex-col">
                <span className="text-[#7780A1]">Collection</span>
                <span>Afterlife</span>
              </p>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(187.96deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 93.86%),linear-gradient(0deg, #060714, #060714)",
            }}
            className="border-[1px] border-[#262840] rounded-[20px] px-8 py-6 my-7"
          >
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col gap-3">
                <span className="text-[14px] text-[#7780A1]">
                  Current price
                </span>
                <p className="text-3xl md:text-4xl text-[56px] font-[600]">
                  <span>5.25</span>{" "}
                  <span className="text-xl md:text-2xl font-[600]"> ETH</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[14px] text-[#7780A1]">Time left</span>
                <p className="text-xl md:text-2xl font-[600]">
                  <span>22:59</span> min{" "}
                </p>
                <p className="text-[14px] text-[#7780A1]">
                  (<span>01.01.2022</span> - <span>01:40:47</span>)
                </p>
              </div>
            </div>
            <NavLink to="/bids">
              <button
                style={{
                  background:
                    "linear-gradient(104.42deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60.23%),linear-gradient(0deg, #2A27C9, #2A27C9)",
                }}
                className="mt-7 border-2 p-3 md:px-6 md:py-4 border-[#2A27C9] rounded-xl font-[600] w-full"
              >
                Place a bid
              </button>
            </NavLink>
          </div>
          <div className="border-b-4 border-[#262840]">
            <p className="text-[14px] text-[#7780A1]">
              History of bids (<span>12</span> people are bidding)
            </p>
            <img src={graph} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftDetail;
