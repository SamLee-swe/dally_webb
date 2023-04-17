import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function PracticeAreaList() {
  return (
    <Container>
      <span />
      <ul>
        <Link href="/practice-areas/divorce">
          <li>UNCONTESTED DIVORCE</li>
        </Link>
        <Link href="/practice-areas/divorce">
          <li>CONTESTED DIVORCE</li>
        </Link>
        <Link href="/practice-areas/collaborative-divorce">
          <li>COLLABORATIVE DIVORCE</li>
        </Link>
        <Link href="/practice-areas/same-sex-divorce">
          <li>SAME-SEX DIVORCE</li>
        </Link>
        <Link href="/practice-areas/military-divorce">
          <li>MILITARY DIVORCE</li>
        </Link>
        <Link href="/practice-areas/child-custody">
          <li>CHILD CUSTODY</li>
        </Link>
        <Link href="/practice-areas/child-support">
          <li>CHILD SUPPORT</li>
        </Link>
        <Link href="/practice-areas/modification">
          <li>MODIFYING CUSTODY OR CHILD SUPPORT</li>
        </Link>
        <Link href="/practice-areas/grandparent-rights">
          <li>GRANDPARENT RIGHTS</li>
        </Link>
        <Link href="/practice-areas/paternity">
          <li>PATERNITY</li>
        </Link>
        <Link href="/practice-areas/adoption">
          <li>ADOPTION</li>
        </Link>
        <Link href="/practice-areas/protective-orders">
          <li>PROTECTIVE ORDERS</li>
        </Link>
        <Link href="/practice-areas/mediation">
          <li>MEDIATION</li>
        </Link>
        <Link href="/practice-areas/child-protective-services">
          <li>CHILD PROTECTIVE SERVICES (CPS)</li>
        </Link>
        <Link href="/practice-areas/termination-of-parental-rights">
          <li>TERMINATION OF PARENTAL RIGHTS</li>
        </Link>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 220px;
  & span {
    display: block;
    width: 100%;
    border-top: 1px solid #67318d;
    margin-bottom: 1rem;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    color: #808080;
    font-weight: 400;
    padding: 12px 0;
    cursor: pointer;
    :hover {
      color: #67318d;
    }
  }
`;
