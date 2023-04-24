import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function DropDownComponent({
  menu,
  title,
  handleSelect,
  type,
  size,
  padding,
  isSubmitted,
}) {
  const closeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const handleClick = (e) => {
    setSelectedItem(e);
    setIsClicked(true);
    setIsOpen(false);

    handleSelect(e);
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

  return (
    <DropDown ref={closeRef} size={size} padding={padding}>
      <div className="drop-down__header" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`drop-down__header__title ${
            isOpen ? "open" : isClicked && !isSubmitted ? "clicked" : ""
          }`}
        >
          {isClicked && !isSubmitted ? <p>{selectedItem}</p> : <p>{title}</p>}
        </div>
        <div className="drop-down__header__arrow">
          <DropDownArrow
            className={
              isOpen ? "open" : isClicked && !isSubmitted ? "clicked" : ""
            }
          />
        </div>
      </div>
      <ul className={`drop-down__body ${isOpen ? "open" : ""}`}>
        {menu.map((item, index) => {
          return (
            <li
              className="drop-down__body__item"
              key={index}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </li>
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
      font-size: 14px;
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
    font-size: 14px;
    line-height: 30px;
    color: #808080;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    :hover {
      color: #c293ff;
    }
  }
`;
