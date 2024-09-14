import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="app-header">
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <Image src="/logo.svg" alt="Brand Logo" width={100} height={100} />
        </a>

        <input type="checkbox" id="nav-visible" />

        <label className="toggle-nav" htmlFor="nav-visible">
          <svg
            className="icon-menu"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
          </svg>
        </label>

        <div className="navbar-nav">
          <div className="nav-list">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>
          <div className="separator-mobile"></div>
          <button className="btn btn-small btn-login btn-secondary ">
            Login
          </button>
          <button className="btn btn-small btn-primary ">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
