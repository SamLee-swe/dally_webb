import React, { useRef, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import styled from "styled-components";
import DropDownComponent from "../dropdown-menu/dropDownMenu";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;
  const locations = ["Fort Worth", "Granbury"];
  const preferences = [
    "Divorce",
    "Child Support/Custody",
    "Modification",
    "Other",
  ];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [office, setOffice] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isName = (name) => {
      const pattern = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/;
      return pattern.test(name);
    };
    const isEmail = (email) => {
      let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return pattern.test(email);
    };
    const isPhone = (phone) => {
      let pattern =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
      return pattern.test(phone);
    };
    const data = {
      name,
      email,
      phone,
      office,
      area,
    };
    if (!name || !email || !phone || !office || !area) {
      return toast.error("Please fill out all fields", {
        position: "top-center",
        style: {
          width: "fit-content",
          fontFamily: "Montserrat",
        },
      });
    } else if (!isName(name) || !isEmail(email) || !isPhone(phone))
      return toast.error("Please enter valid information", {
        position: "top-center",
        style: {
          width: "max-content",
          fontFamily: "Montserrat",
        },
      });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw Error(json.message);
    toast.success("Message Sent", {
      position: "top-center",
    });
    setName("");
    setEmail("");
    setPhone("");
    setIsSubmitted(true);
  };

  const handleSelect = (e) => {
    setIsSubmitted(false);
    if (e === "Fort Worth" || e === "Granbury") {
      setOffice(e);
    } else {
      setArea(e);
    }
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ContactForm onSubmit={handleSubmit}>
        <InputField
          placeholder="Name*"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          placeholder="Email Address*"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></InputField>
        <InputField
          type="text"
          placeholder="Phone Number*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        ></InputField>

        <DropDownComponent
          title={"Office Preference*"}
          menu={locations}
          handleSelect={handleSelect}
          isSubmitted={isSubmitted}
          type="text"
          required
        />
        <DropDownComponent
          handleSelect={handleSelect}
          title={"Area of Interest*"}
          menu={preferences}
          isSubmitted={isSubmitted}
          type="text"
          required
        />
        <button className="six" type="submit">
          SUBMIT INFO
        </button>
      </ContactForm>
      <GoogleReCaptcha />
      <ToastContainer />
    </GoogleReCaptchaProvider>
  );
}

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  .six {
    color: #ffffff;
    border: 1px solid #ffffff;
    transition: 0.3s ease-in-out;
    font-size: 16px;
    background-color: transparent;
    font-weight: 500;
    padding: 10px 40px;
    letter-spacing: 0.25em;
    margin-top: 1rem;
    cursor: pointer;
    :hover {
      border: 1px solid #c293ff;
      color: #c293ff;
    }
  }

  @media (max-width: 1300px) {
    max-width: 100%;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .six {
      grid-column: 1;
      grid-row: 4;
      max-width: 200px;
    }
    .six {
      font-size: 12px;
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    .six {
      padding: 5px 20px;
    }
  }
`;

const InputField = styled.input`
  width: 100%;
  max-width: 492px;
  padding: 0.67rem 1rem;
  border: none;
  background-color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 0;
  :focus {
    outline: none;
  }
`;
