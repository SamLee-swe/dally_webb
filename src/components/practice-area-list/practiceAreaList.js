import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PracticeAreaList() {
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    const links = document.querySelectorAll("a");

    for (let i = 0; i < links.length; i++) {
      const href = links[i].getAttribute("href");
      if (href == path) {
        setActiveLink(links[i].getAttribute("href"));
        break;
      }
    }
  }, [router.pathname]);

  return (
    <Container>
      <span />
      <ul>
        <Link href="/practice-areas/uncontested-divorce">
          <li
            className={
              activeLink === "/practice-areas/uncontested-divorce"
                ? "active"
                : ""
            }
          >
            UNCONTESTED DIVORCE
          </li>
        </Link>
        <Link href="/practice-areas/contested-divorce">
          <li
            className={
              activeLink === "/practice-areas/contested-divorce" ? "active" : ""
            }
          >
            CONTESTED DIVORCE
          </li>
        </Link>
        <Link href="/practice-areas/collaborative-divorce">
          <li
            className={
              activeLink === "/practice-areas/collaborative-divorce"
                ? "active"
                : ""
            }
          >
            COLLABORATIVE DIVORCE
          </li>
        </Link>
        <Link href="/practice-areas/same-sex-divorce">
          <li
            className={
              activeLink === "/practice-areas/same-sex-divorce" ? "active" : ""
            }
          >
            SAME-SEX DIVORCE
          </li>
        </Link>
        <Link href="/practice-areas/military-divorce">
          <li
            className={
              activeLink === "/practice-areas/military-divorce" ? "active" : ""
            }
          >
            MILITARY DIVORCE
          </li>
        </Link>
        <Link href="/practice-areas/child-custody">
          <li
            className={
              activeLink === "/practice-areas/child-custody" ? "active" : ""
            }
          >
            CHILD CUSTODY
          </li>
        </Link>
        <Link href="/practice-areas/child-support">
          <li
            className={
              activeLink === "/practice-areas/child-support" ? "active" : ""
            }
          >
            CHILD SUPPORT
          </li>
        </Link>
        <Link href="/practice-areas/modification">
          <li
            className={
              activeLink === "/practice-areas/modification" ? "active" : ""
            }
          >
            MODIFYING CUSTODY OR CHILD SUPPORT
          </li>
        </Link>
        <Link href="/practice-areas/grandparent-rights">
          <li
            className={
              activeLink === "/practice-areas/grandparent-rights"
                ? "active"
                : ""
            }
          >
            GRANDPARENT RIGHTS
          </li>
        </Link>
        <Link href="/practice-areas/paternity">
          <li
            className={
              activeLink === "/practice-areas/paternity" ? "active" : ""
            }
          >
            PATERNITY
          </li>
        </Link>
        <Link href="/practice-areas/adoption">
          <li
            className={
              activeLink === "/practice-areas/adoption" ? "active" : ""
            }
          >
            ADOPTION
          </li>
        </Link>
        <Link href="/practice-areas/protective-orders">
          <li
            className={
              activeLink === "/practice-areas/protective-orders" ? "active" : ""
            }
          >
            PROTECTIVE ORDERS
          </li>
        </Link>
        <Link href="/practice-areas/mediation">
          <li
            className={
              activeLink === "/practice-areas/mediation" ? "active" : ""
            }
          >
            MEDIATION
          </li>
        </Link>
        <Link href="/practice-areas/child-protective-services">
          <li
            className={
              activeLink === "/practice-areas/child-protective-services"
                ? "active"
                : ""
            }
          >
            CHILD PROTECTIVE SERVICES (CPS)
          </li>
        </Link>
        <Link href="/practice-areas/termination-of-parental-rights">
          <li
            className={
              activeLink === "/practice-areas/termination-of-parental-rights"
                ? "active"
                : ""
            }
          >
            TERMINATION OF PARENTAL RIGHTS
          </li>
        </Link>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 320px;
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
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.1em;
    color: #808080;
    margin-bottom: 15px;
    cursor: pointer;
    :hover {
      color: #67318d;
    }
  }
  .active {
    color: #67318d;
  }

  @media (max-width: 1068px) {
    & li {
      font-size: 15px;
    }
  }
`;
