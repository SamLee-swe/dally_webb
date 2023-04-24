import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileDropDown(props) {
  const closeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    setSelectedItem(e);
    setIsClicked(true);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (closeRef.current && !closeRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeRef]);

  useEffect(() => {
    practiceAreas.forEach((area) => {
      if (router.pathname === area.slug) {
        setSelectedItem(area.area);
        setIsClicked(true);
      }
    });
  }, []);

  const practiceAreas = [
    {
      area: "Uncontested Divorce",
      slug: "/practice-areas/uncontested-divorce",
    },
    {
      area: "Contested Divorce",
      slug: "/practice-areas/contested-divorce",
    },
    {
      area: "Collaborative Divorce",
      slug: "/practice-areas/collaborative-divorce",
    },
    {
      area: "Same-Sex Divorce",
      slug: "/practice-areas/same-sex-divorce",
    },
    {
      area: "Child Custody",
      slug: "/practice-areas/child-custody",
    },
    {
      area: "Child Support",
      slug: "/practice-areas/child-support",
    },
    {
      area: "Modifying Custody or Child Support",
      slug: "/practice-areas/modification",
    },
    {
      area: "Grandparent Rights",
      slug: "/practice-areas/grandparent-rights",
    },
    {
      area: "Paternity",
      slug: "/practice-areas/paternity",
    },
    {
      area: "Adoption",
      slug: "/practice-areas/adoption",
    },
    {
      area: "Protective Orders",
      slug: "/practice-areas/protective-orders",
    },
    {
      area: "Mediation",
      slug: "/practice-areas/mediation",
    },
    {
      area: "Child Protective Services (CPS)",
      slug: "/practice-areas/child-protective-services",
    },
    {
      area: "Termination of Parental Rights",
      slug: "/practice-areas/termination-of-parental-rights",
    },
  ];
  return (
    <DropDown ref={closeRef} size={props?.size} padding={props?.padding}>
      <div className="drop-down__header" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`drop-down__header__title ${
            isOpen ? "open" : isClicked ? "clicked" : ""
          }`}
        >
          {isClicked ? <p>{selectedItem}</p> : <p>{props.title}</p>}
        </div>
        <div className="drop-down__header__arrow">
          <DropDownArrow
            className={isOpen ? "open" : isClicked ? "clicked" : ""}
          />
        </div>
      </div>
      <ul className={`drop-down__body ${isOpen ? "open" : ""}`}>
        {practiceAreas.map((item, index) => {
          return (
            <Link href={item.slug} key={index}>
              <li
                className="drop-down__body__item"
                key={index}
                onClick={() => handleClick(item.area)}
              >
                {item.area}
              </li>
            </Link>
          );
        })}
      </ul>
    </DropDown>
  );
}

const DropDownArrow = styled.span`
  font-size: 14px;
  color: #000000;
  transition: transform 0.5s ease-in-out;
  margin-bottom: 0;
  &::before {
    content: "";
    display: inline-block;
    border-top: 7px solid #808080;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    vertical-align: middle;
  }
  &.open::before {
    border-top: 7px solid #c293ff;
  }
  &.clicked::before {
    content: "";
    border-top: none;
    border-bottom: 7px solid #67318d;
  }
`;
const DropDown = styled.div`
  width: 100%;
  height: 42px;
  max-width: 492px;
  position: relative;

  .drop-down__header {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    background-color: #ffffff;
  }
  .drop-down__header__title {
    & p {
      width: 100%;
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 30px;
      color: #808080;
    }
    &.open {
      & p {
        color: #c293ff;
      }
    }
    &.clicked {
      & p {
        color: #67318d;
      }
    }
  }
  .drop-down__header__arrow {
    margin: 0;
    font-size: 14px;
    transition: transform 0.2s ease-in-out;
    .open {
      transform: rotate(180deg);
    }
  }
  .drop-down__body {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    overflow-y: auto;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transition: transform 0.5s ease-in-out, opacity 0.5s;
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.1);

    &.open {
      pointer-events: all;
      opacity: 1;
    }
  }
  .drop-down__body__item {
    padding: 0.1rem 1rem;
    font-style: normal;
    font-size: 19px;
    line-height: 30px;
    color: #808080;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    :hover {
      color: #c293ff;
    }
  }
`;
