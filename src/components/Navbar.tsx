// import React from 'react'

import { NavLink } from "react-router-dom";
import nftMarket from "../assets/NFT Market.svg";
import logo from "../assets/Sygnet.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-8">
      <NavLink to="/">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" />
          <img src={nftMarket} alt="" />
        </div>
      </NavLink>
      <div className="lg:flex items-center gap-8 lg:gap-12 hidden font-[600] text-[16px] text-[#7780A1]">
        <NavLink
          className="hover:text-white hover:scale-105 transition-all delay-150 ease-linear"
          to="/"
        >
          Auctions
        </NavLink>
        <NavLink
          className="hover:text-white hover:scale-105 transition-all delay-150 ease-linear"
          to="/"
        >
          Roadmap
        </NavLink>
        <NavLink
          className="hover:text-white hover:scale-105 transition-all delay-150 ease-linear"
          to="/"
        >
          Discover
        </NavLink>
        <NavLink
          className="hover:text-white hover:scale-105 transition-all delay-150 ease-linear"
          to="/"
        >
          Community
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <NavLink to="/contact">
          <button className="border-2 p-3 md:px-6 md:py-4 border-[#7780A1] rounded-xl text-[#7780A1] font-[600] hover:scale-90 transition-all delay-150 ease-linear">
            Contact
          </button>
        </NavLink>
        <NavLink to="/myaccount">
          <button
            style={{
              background:
                "linear-gradient(104.42deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60.23%),linear-gradient(0deg, #2A27C9, #2A27C9)",
            }}
            className="my-7 border-2 p-3 md:px-6 md:py-4 border-[#2A27C9] rounded-xl font-[600] hover:scale-90 transition-all delay-150 ease-linear"
          >
            My account
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
