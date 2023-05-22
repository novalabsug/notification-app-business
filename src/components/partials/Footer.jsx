import Link from "next/link";
import React from "react";
import { SocialContainer } from "./Footer.style";

const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="flx">
        <div className="flx wrapper">
          <div className="wrapper-1"></div>
        </div>
      </div>
      <div className="flx">
        <SocialContainer>
          <li>
            <Link href="https://google.com">
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
          <li>
            <Link href="https://google.com">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="https://google.com">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
        </SocialContainer>
      </div>
      <p className="f-size-med center-align p-1 light-txt">
        &copy; Copyright{" "}
        <span className="f-size-med primary-color">{currentYear()}</span> nmail.
      </p>
    </footer>
  );
};

export default Footer;
