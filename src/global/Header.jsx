import { useEffect } from "react";
import logo from "../assets/images/global/logo.png";

const Header = () => {
  useEffect(() => {
    var details = [...document.querySelectorAll("details")];
    document.addEventListener("click", function (e) {
      if (!details.some((f) => f.contains(e.target))) {
        details.forEach((f) => f.removeAttribute("open"));
      } else {
        details.forEach((f) =>
          !f.contains(e.target) ? f.removeAttribute("open") : ""
        );
      }
    });
  }, []);

  return (
    <div className="fixed z-[999] navbar bg-gradient-to-r from-blue-900 to-green-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="Login" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100"
          >
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a href="#Products">Products</a>
                </li>
                <li>
                  <a href="#Benefits">Benefits</a>
                </li>
                <li>
                  <a href="#Features">Features</a>
                </li>
                <li>
                  <a href="#FaQ">FAQs</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul className="p-2">
                <li>
                  <a href="#AboutUs">About Us</a>
                </li>
                <li>
                  <a href="#Process">Process</a>
                </li>
                <li>
                  <a href="#Mission">Mission</a>
                </li>
                <li>
                  <a href="#Team">Team</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="flex flex-row items-center btn btn-ghost">
          <img src={logo} className="h-7 w-7" alt="Logo" />
          <p className="text-2xl text-white">Recyco</p>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className=" mx-1">
              <summary className=" text-white">Services</summary>
              <ul className="p-2">
                <li>
                  <a href="#Products">Products</a>
                </li>
                <li>
                  <a href="#Benefits">Benefits</a>
                </li>
                <li>
                  <a href="#Features">Features</a>
                </li>
                <li>
                  <a href="#FaQ">FAQs</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details className="mx-1">
              <summary className="text-white">Company</summary>
              <ul className="p-2">
                <li>
                  <a href="#AboutUs">About Us</a>
                </li>
                <li>
                  <a href="#Process">Process</a>
                </li>
                <li>
                  <a href="#Mission">Mission</a>
                </li>
                <li>
                  <a href="#Team">Team</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-transparent text-white">LOGIN</a>
      </div>
    </div>
  );
};

export default Header;
