import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../../../public/images/banner_logo.png";
import phone from "../../../public/images/phone_icon.png";
import Hamburger from "../UI/hamburger-menu/hamburger";

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

      <ul className="nav-menu">
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
      <button className="phoneLogo">
        <Image
          src={phone}
          alt="phone icon"
          width={15}
          height={15}
          style={{
            height: "auto",
            position: "relative",
            top: "3px",
            marginRight: "1rem",
          }}
        />
        817-409-1136
      </button>
      <span className="ham-wrapper">
        <Hamburger />
      </span>
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
      padding: 11px 40px;
      font-style: normal;
      font-size: 16px;
      letter-spacing: 1px;
      transition: 0.5s ease;

      :hover {
        color: #ffffff;
        background-color: #67318d;
        font-weight: 500;
      }
    }
  }

  .link {
    color: black;
    width: fit-content;
  }

  .phoneLogo {
    font-family: "Montserrat";
    font-style: normal;
    width: 261px;
    height: 51px;
    background-color: #533575;
    position: absolute;
    border: none;
    top: 0;
    right: 80px;
    cursor: pointer;
    z-index: 9999;
    font-size: 16px;
    color: white;
    letter-spacing: 4px;
    transition: 0.3s ease-in-out;

    :hover {
      background-color: #c293ff;
    }
  }

  .ham-wrapper {
    display: none;
  }

  @media (max-width: 1390px) {
    padding: 2.5rem 1rem 1rem 1rem;
    .nav-menu {
      display: none;
    }
    .logo {
      max-width: 200px;
      margin: -2rem 0 0 -8px;
    }

    .phoneLogo {
      display: none;
    }

    .ham-wrapper {
      display: block;
    }
  }
`;
