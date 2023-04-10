import foodLogo from "../assets/images/yukari-logo.png";
import cartIcon from "../assets/icons/shop-cart-2.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav id="header" className="bg-white">
      <div className="w-full container max-w-[1240px] mx-auto flex flex-wrap items-center justify-between  mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center ">
          <Link
            to="/"
            className="toggleColor text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl "
          >
            <img src={foodLogo} alt="logo" className="w-40 h-24 object-cover" />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-12">
          <Link to="/" className="home text-sm font-medium">
            Home
          </Link>
          <Link to="#about" className="about text-sm ">
            About
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4 mr-6">
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <Link to="/login" className="login text-sm">
            Log In
          </Link>
          <Link to="/register" className="register text-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
