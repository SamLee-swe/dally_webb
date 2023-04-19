import styled from "styled-components";
import Link from "next/link";

export default function Hamburger() {
  return (
    <Container>
      <input type="checkbox" name="" id="" className="check" />
      <div className="ham-menu">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className="menu-items">
        <li>ATTORNEYS</li>
        <li>PRACTICE AREAS</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ::after,
  ::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .menu-items {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 3rem 1rem;
    list-style: none;
    opacity: 0;
    font-size: 2rem;
    background-color: #ffffff;
    transform: translateY(-5%);
    transition: transform 1s ease-in-out, opacity 1s;
  }

  .menu-items li {
    color: black;
    padding: 0.5rem;
    cursor: pointer;
  }

  .menu-items li :hover {
    color: rgb(174, 174, 174);
  }

  .check {
    position: absolute;
    top: 0;
    right: 10px;
    height: 3rem;
    width: 3rem;
    opacity: 0;
    z-index: 3;
  }

  .check:hover {
    cursor: pointer;
  }

  .check:checked ~ .menu-items {
    display: block;
    transform: translateY(0%);
    opacity: 1;
  }

  .ham-menu {
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 0;
    right: 10px;
    padding: 0.9rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ffffff;
    cursor: pointer;
  }

  .ham-menu .line {
    background-color: black;
    border-radius: 1rem;
    width: 21px;
    height: 2px;
  }

  .ham-menu .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .ham-menu .line2 {
    transition: opacity 0.4s ease-in-out;
  }

  .ham-menu .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .check:checked ~ .ham-menu .line1 {
    display: block;
    transform: rotate(45deg);
  }

  .check:checked ~ .ham-menu .line2 {
    opacity: 0;
  }

  .check:checked ~ .ham-menu .line3 {
    display: block;
    transform: rotate(-45deg);
  }
`;
