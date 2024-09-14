import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="app-footer">
      <div className=" content ">
        <div className="logo">
          <Image
            src="/logo.svg"
            alt="Brand Logo"
            width={100}
            height={100}
            className="white-logo"
          />
        </div>
        <div className="company-links group">
          <div className="links">
            <p className="title">Features</p>
            <a href="">Link Shortening</a>
            <a href="">Brandoed Links</a>
            <a href="">Analytics</a>
          </div>
          <div className="links">
            <p className="title">Resources</p>
            <a href="">Blog</a>
            <a href="">Developers</a>
            <a href="">Support</a>
          </div>
          <div className="links">
            <p className="title">Company</p>
            <a href="">About</a>
            <a href="">Our Team</a>
            <a href="">Careers</a>
            <a href="">Contacts</a>
          </div>
        </div>
        <div className="social-links">
          <a href="/" className="navbar-brand">
            <Image
              src="/icon-facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
            />
          </a>
          <a href="/" className="navbar-brand">
            <Image
              src="/icon-twitter.svg"
              alt="Twitter"
              width={20}
              height={20}
            />
          </a>
          <a href="/" className="navbar-brand">
            <Image
              src="/icon-pinterest.svg"
              alt="Pinterest"
              width={20}
              height={20}
            />
          </a>
          <a href="/" className="navbar-brand">
            <Image
              src="/icon-instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
