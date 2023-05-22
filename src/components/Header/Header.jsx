import { checkLoginFunc } from "@/middleware/checkLogin";
import Link from "next/link";
import React from "react";
import { H1, HeaderStyle, Wrapper } from "./Header.style";
import { Button } from "../style/Main.style";

const Header = () => {
  return (
    <HeaderStyle>
      <Wrapper>
        <H1 className="light-txt m-2">
          Send mail and chat with your users. Easy, Fast, Reliable
        </H1>
        {checkLoginFunc ? (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        )}
      </Wrapper>
    </HeaderStyle>
  );
};

export default Header;
