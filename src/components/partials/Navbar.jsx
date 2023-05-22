import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  BtnWrapper,
  Logo,
  MainNavbar,
  Navlink,
  SideNav,
  SocialConatiner,
} from "./Navbar.style";
import checkLoginFunc from "@/middleware/checkLogin";
import { Button2 } from "../style/Main.style";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({ status: false });
  const handleLogout = () => {
    localStorage.setItem("nmail", JSON.stringify({}));
    location.assign("/login");
  };

  useEffect(() => {
    if (checkLoginFunc()) {
      setIsLoggedIn({ status: true });
    } else {
      setIsLoggedIn({ status: false });
    }
  }, []);

  return (
    <MainNavbar>
      <Logo>
        <Link href="/" className="flx">
          <h3 className="f-size-lrg bold-txt primary-color t-up">
            n<span className="bold-txt f-size-lrg t-up">mail</span>
          </h3>
        </Link>
      </Logo>

      <Navlink>
        <ul className="flx">
          <li>
            <Link href="/">
              <h5 className="bold-txt">Home</h5>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h5 className="bold-txt">About</h5>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h5 className="bold-txt">Contact</h5>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <h5 className="bold-txt">Dashboard</h5>
            </Link>
          </li>
        </ul>
      </Navlink>
      <SideNav className="flx">
        <SocialConatiner>
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
        </SocialConatiner>
        <BtnWrapper>
          {isLoggedIn.status ? (
            <Button2 onClick={handleLogout}>Logout</Button2>
          ) : (
            <Link href="/login">
              <Button2>Login</Button2>
            </Link>
          )}
        </BtnWrapper>
      </SideNav>
    </MainNavbar>
  );
};

export default Navbar;
