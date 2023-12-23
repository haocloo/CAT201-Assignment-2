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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <a>Recyle Products</a>
              <a>About Us</a>
              <a>Contact</a>
              <a>Services</a>
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
            <a>Recyle Products</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Services</a>
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
