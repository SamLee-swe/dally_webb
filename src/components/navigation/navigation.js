import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../../../public/images/banner_logo.png";
import phone from "../../../public/images/phone.png";

export default function Navigation() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Nav>
      <Image
        src={logo}
        alt="banner logo"
        width={478}
        height={74}
        className="logo"
        style={{
          height: "auto",
          cursor: "pointer",
        }}
        onClick={() => {
          router.push("/");
        }}
      />

      <ul>
        <Link href={"/attorneys"} className="link">
          <li>ATTORNEYS</li>
        </Link>
        <Link href={"/practice-areas"} className="link">
          <li>PRACTICE AREAS</li>
        </Link>
        <Link href={"/about-us"} className="link">
          <li>ABOUT US</li>
        </Link>
        <Link href={"/contact-us"} className="link">
          <li>CONTACT US</li>
        </Link>
      </ul>
      <Image
        src={phone}
        alt="phone"
        width={261}
        height={45}
        className="phoneLogo"
        style={{
          height: "auto",
          width: "auto",
        }}
      />
    </Nav>
  );
}

const Nav = styled.nav`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #ffffff;
  padding: 3rem 2rem 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & ul {
    & li {
      display: inline-block;
      margin: 0 3rem;
      font-size: 1.2rem;
      letter-spacing: 1px;
      :hover {
        color: #67318d;
      }
    }
  }

  .link {
    color: black;
  }

  .phoneLogo {
    position: absolute;
    top: 0;
    right: 80px;
    cursor: pointer;
    z-index: 9999;
    margin-top: -9px;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 1rem 1rem;
    & ul {
      display: none;
    }
    .logo {
      max-width: 200px;
      margin: -2rem 0 0 -8px;
    }

    .phoneLogo {
      max-width: 120px;
      margin-top: -2px;
    }
  }
`;
