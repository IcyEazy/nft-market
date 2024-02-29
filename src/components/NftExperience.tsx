import search from "../assets/Search Icon.svg";
import arrowDown from "../assets/Arrow Down Icon.svg";
import nftExp from "../assets/NftExperience.png";
import sport from "../assets/sport.svg";
import nike from "../assets/nike.svg";
import adidas from "../assets/adidas.svg";
import newHolland from "../assets/New Holland.svg";
import square from "../assets/Square 02.png";
import square4 from "../assets/Square 04.png";
import square4b from "../assets/Square 04b.png";
import square4c from "../assets/Square 04c.png";
import square4d from "../assets/Square 04d.png";
import square4e from "../assets/Square 04e.png";

function NftExperience() {
  return (
    <div className="flex py-24 justify-center">
      <div className="relative">
        <img
          className="w-[50px] h-[50px] absolute z-[999] top-[70%] left-[100%] translate-x-[10%] translate-y-[-50%]"
          src={square}
          alt=""
        />
        <img
          className="w-[50px] h-[50px] absolute z-[999] top-[50%] left-[-290%] translate-x-[-50%] translate-y-[-50%]"
          src={square4b}
          alt=""
        />
        <img className="w-[50px] h-[50px]" src={square4} alt="" />
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-[#7780A1] text-[15px] text-center mb-4">
          NON FUNGIBLE TOKENS
        </h2>
        <div className="">
          <img src={nftExp} alt="" />
        </div>
        <p className="text-[#7780A1] text-2xl mb-4 text-center">
          Discover, collect and sell.
        </p>
        <div className="flex justify-center items-center border-2 rounded-2xl w-auto lg:w-auto px-10 py-5 bg-white">
          <input
            className="text-[#7780A1] w-full bg-white outline-none pr-8 "
            type="text"
            placeholder="items, collections, and creators"
          />
          <div className="border-l-[1px] border-red-500 pl-2 flex items-center gap-16 mx-8">
            <p className="text-[#262840]">Category</p>
            <img src={arrowDown} alt="" />
          </div>
          <img src={search} alt="" />
        </div>
        <div className="flex justify-center gap-10 mt-28">
          <img src={sport} alt="" />
          <img src={nike} alt="" />
          <img src={adidas} alt="" />
          <img src={newHolland} alt="" />
        </div>
      </div>
      <div className="relative">
        <img
          className="w-[50px] h-[50px] absolute z-[999] top-[80%] right-[100%] translate-x-[10%] translate-y-[-50%]"
          src={square4c}
          alt=""
        />
        <img
          className="w-[50px] h-[50px]  absolute z-[999] top-[50%] right-[-290%] translate-x-[-50%] translate-y-[-50%]"
          src={square4d}
          alt=""
        />
        <img className="w-[50px] h-[50px]" src={square4e} alt="" />
      </div>
    </div>
  );
}

export default NftExperience;
