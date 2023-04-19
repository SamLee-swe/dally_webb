import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Banner(props) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (router.pathname === "/contact-us") {
      return setActive(true);
    } else {
      return setActive(false);
    }
  }, [router.pathname]);

  return (
    <Container>
      <Image
        src={props.src}
        alt={props.alt}
        width={1440}
        height={274}
        style={{
          objectFit: `contain`,
          width: "100%",
          height: `auto`,
          margin: `${(props) => props.margin}`,
        }}
      />
      <span className={active ? "active" : ""} />
      <Title left={props.left}>{props.title}</Title>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  position: relative;
  & span {
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: #272d47;
    opacity: 0.8;
  }
`;
const Title = styled.p`
  position: absolute;
  color: #ffffff;
  bottom: 9px;
  left: ${(props) => props.left};
  width: fit-content;
  background-color: rgba(103, 49, 141, 0.7);
  padding: 1rem 3rem;
  letter-spacing: 6px;
  font-size: 26px;

  @media (max-width: 768px) {
    left: 50px;
    font-size: 12px;
    padding: 0.5rem 1rem;
  }
`;
