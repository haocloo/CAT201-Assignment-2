import logo from "../assets/images/global/logo.svg";

const Header = () => {
  return (
    <div className="navbar border-b-2 border-black/50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="Login" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        <a className="btn btn-ghost text-xl">
          <img src={logo} className="h-full" alt="Logo" />
          Recyco
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Services</summary>
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
            <details>
              <summary>Company</summary>
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
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Header;
