import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function SecondaryNav() {
  return (
    <NameBox>
      <Link href={"/attorneys/dally"}>
        <p className="attorney-name">LORI E. DALLY</p>
      </Link>
      <Link href={"/attorneys/webb"}>
        <p className="attorney-name">DANIEL WEBB</p>
      </Link>
      <Link href={"/attorneys/brewington"}>
        <p className="attorney-name">MAX BREWINGTON</p>
      </Link>
    </NameBox>
  );
}
const NameBox = styled.div`
  width: 80%;
  max-width: 1230px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-top: 1px solid #67318d;

  letter-spacing: 2px;
  margin: 4rem auto 0;
  .attorney-name {
    color: #808080;
    font-size: 20px;
    font-weight: 500;
    :hover {
      color: #c293ff;
    }
  }
`;
