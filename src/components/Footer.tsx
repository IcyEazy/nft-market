import { NavLink } from "react-router-dom";
import footerLogo from "../assets/Logo.png";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

function Footer() {
  return (
    <div className="px-10 lg:px-20 pb-16 mt-10">
      <div className="flex gap-16 md:gap-0 flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-between gap-24 border-[1px] border-[#262840] rounded-l-[20px] p-8">
          <NavLink to="/">
            <img src={footerLogo} alt="" />
          </NavLink>
          <div className="flex gap-8">
            <a className="text-[#7780A1] text-[14px]" href="/support">
              Support
            </a>
            <a className="text-[#7780A1] text-[14px]" href="/term">
              Term of service
            </a>
            <a className="text-[#7780A1] text-[14px]" href="/license">
              License
            </a>
          </div>
        </div>
        <div className="flex-1 hidden md:block border-[1px] border-[#262840] p-8">
          <div className="flex-1 flex flex-col gap-2 font-[600]">
            <NavLink to="/auction">Auctions</NavLink>
            <NavLink to="/">Roadmap</NavLink>
            <NavLink to="/">Discover</NavLink>
            <NavLink to="/">Community</NavLink>
          </div>
          <NavLink to="/myaccount">
            <button
              style={{
                background:
                  "linear-gradient(104.42deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60.23%),linear-gradient(0deg, #2A27C9, #2A27C9)",
              }}
              className="mt-10 mb-16 border-2 p-3 md:px-6 md:py-4 border-[#2A27C9] rounded-xl font-[600]"
            >
              My account
            </button>
          </NavLink>
          <div className="flex gap-5">
            <NavLink to="https://www.facebook.com">
              <img src={facebook} alt="" />
            </NavLink>
            <NavLink to="https://www.linkedin.com">
              <img src={linkedin} alt="" />
            </NavLink>
            <NavLink to="https://www.github.com">
              <img src={github} alt="" />
            </NavLink>
            <NavLink to="https://www.twitter.com">
              <img src={twitter} alt="" />
            </NavLink>
            <NavLink to="https://www.instagram.com">
              <img src={instagram} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="hidden flex-1 md:flex flex-col justify-between border-[1px] border-[#262840] rounded-r-[20px] p-8">
          <p className="text-[#7780A1]">
            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
            velit, sed egestas in. Id nam semper dolor tellus vulputate eget
            turpis.{" "}
          </p>
          <div className="bg-white rounded-2xl px-7 py-3 flex justify-between">
            <input
              type="text"
              placeholder="Newsletter"
              className="outline-none text-[#7780A1]"
            />
            <button className="text-[#2A27C9] font-[600]">Sign in</button>
          </div>
        </div>
        <div className="flex-1 flex md:hidden border-[1px] border-[#262840] p-8">
          <div className="flex-1">
            <div className="flex-1 flex flex-col gap-2 font-[600]">
              <NavLink to="/auction">Auctions</NavLink>
              <NavLink to="/">Roadmap</NavLink>
              <NavLink to="/">Discover</NavLink>
              <NavLink to="/">Community</NavLink>
            </div>
            <NavLink to="/myaccount">
              <button
                style={{
                  background:
                    "linear-gradient(104.42deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60.23%),linear-gradient(0deg, #2A27C9, #2A27C9)",
                }}
                className="my-7 border-2 p-3 md:px-6 md:py-4 border-[#2A27C9] rounded-xl font-[600] "
              >
                My account
              </button>
            </NavLink>
            <div className="flex gap-3">
              <NavLink to="https://www.facebook.com">
                <img src={facebook} alt="" />
              </NavLink>
              <NavLink to="https://www.linkedin.com">
                <img src={linkedin} alt="" />
              </NavLink>
              <NavLink to="https://www.github.com">
                <img src={github} alt="" />
              </NavLink>
              <NavLink to="https://www.twitter.com">
                <img src={twitter} alt="" />
              </NavLink>
              <NavLink to="https://www.instagram.com">
                <img src={instagram} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-20">
            <p className="text-[#7780A1]">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
              velit, sed egestas in. Id nam semper dolor tellus vulputate eget
              turpis.{" "}
            </p>
            <div className="bg-white rounded-2xl px-7 py-3 flex justify-between">
              <input
                type="text"
                placeholder="Newsletter"
                className="w-[80%] outline-none text-[#7780A1]"
              />
              <button className="text-[#2A27C9] font-[600]">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
