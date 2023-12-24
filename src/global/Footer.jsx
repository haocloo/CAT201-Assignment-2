import logo from "../assets/images/global/logo.png";

const Footer = ({ displayToast }) => {
  return (
    <footer id="#Footer" className="footer p-10 bg-[#242424] text-white">
      <a
        href="#Hero"
        className="pointer flex flex-row md:flex-col items-center justify-center mr-16 -ml-6 md:ml-0"
      >
        <img
          src={logo}
          className="h-32 w-36 scale-[60%] -mt-5 -mr-4"
          alt="Logo"
        />
        <p className="-mt-7 -mr-3 font-bold text-2xl">Recyco</p>
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:pr-28 sm:pr-10">
        <nav className="flex flex-col gap-5">
          <header className="footer-title text-white text-lg">Services</header>
          <a href="#Products" className="link link-hover">
            Products
          </a>
          <a href="#Benefits" className="link link-hover">
            Benefits
          </a>
          <a href="#Feature" className="link link-hover">
            Features
          </a>
          <a href="#FaQ" className="link link-hover">
            FAQs
          </a>
        </nav>
        <nav className="flex flex-col gap-5">
          <header className="footer-title text-white text-lg">Company</header>
          <a href="#AboutUs" className="link link-hover">
            About Us
          </a>
          <a href="#Process" className="link link-hover">
            Process
          </a>
          <a href="#Mission" className="link link-hover">
            Mission
          </a>
          <a href="#Team" className="link link-hover">
            Team
          </a>
        </nav>
        <nav className="flex flex-col gap-5">
          <header className="footer-title text-white text-lg">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form className="w-full">
          <header className="footer-title text-white text-lg">
            Newsletter
          </header>
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item placeholder:text-black/80"
              />
              <button
                onClick={() => {
                  displayToast();
                  window.location.href = "#Footer";
                }}
                className="btn btn-primary join-item"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
