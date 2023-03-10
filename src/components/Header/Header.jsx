import { checkLoginFunc } from "@/middleware/checkLogin";
import Link from "next/link";
import React from "react";
import { H1, HeaderStyle, Wrapper } from "./Header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <Wrapper>
        <H1 className="light-txt m-2">
          Send mail and chat with your users. Easy, Fast, Reliable
        </H1>
        {/* {checkLoginFunc() ? (
          <Link href="/dashboard" className="btn">
            Dashboard
          </Link>
        ) : (
          <Link href="/dashboard" className="btn">
            Get Started
          </Link>
        )} */}
      </Wrapper>
    </HeaderStyle>
  );
};

export default Header;
