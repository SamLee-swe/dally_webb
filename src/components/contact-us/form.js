import styled from "styled-components";
import PhoneIcon from "../../../public/images/phone_icon.png";
import EmailIcon from "../../../public/images/email_icon.png";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <Constainer>
      <div className="container">
        <Link href="/contact-us">
          <h1>CONTACT US</h1>
        </Link>
        <span />
        <div className="wrapper">
          <ContactForm>
            <input type="text" placeholder="Name*" required />
            <input type="text" placeholder="Email Address*" required />
            <input type="text" placeholder="Phone Number*" required />
            <select placeholder="Office Preference*" required>
              <option value="" disabled selected>
                Office Preference*
              </option>
              <option value="Fort Worth">Fort Worth</option>
              <option value="Granbury">Granbury</option>
            </select>
            <select placeholder="Area of Interest*" required>
              <option value="" disabled selected>
                Area of Interest*
              </option>
              <option value="Divorce">Divorce</option>
              <option value="Child Support/Custody">
                Child Support/Custody
              </option>
              <option value="Modification">Modification</option>
              <option value="Other">Other</option>
            </select>
            <button>SUBMIT INFO</button>
          </ContactForm>
          <ContactInfo>
            <Image
              src={PhoneIcon}
              alt="Phone icon"
              width={15}
              height={15}
              style={{
                height: "auto",
                marginRight: "2rem",
              }}
            />
            <h3>FORT WORTH - 817-409-1136</h3>
            <br />
            <Image
              src={PhoneIcon}
              alt="Phone icon"
              width={15}
              height={15}
              style={{
                height: "auto",
                marginRight: "2rem",
              }}
            />
            <h3>FORT WORTH - 817-409-1136</h3>
            <br />

            <Image
              src={EmailIcon}
              alt="Email icon"
              width={23}
              height={23}
              style={{
                height: "auto",
                marginRight: "1.5rem",
              }}
            />
            <h3>LORI@TEXFAMILYLAWYER.COM</h3>
            <p>
              ** We welcome your email, but please understand that if you are
              not already a client of Dally & Webb Family Law, PLLC, we cannot
              consult with or represent you until we confirm that doing so would
              not create a conflict of interest and is otherwise consistent with
              the policies of our firm. Accordingly, please do not include any
              confidential information until we verify that the firm is in a
              position to consult with or represent you. Prior to that time,
              there is no assurance that information you send us will be
              maintained as confidential. Submitting information does not create
              an attorney-client relationship and no representation occurs
              unless and until a contract for legal services is executed. Thank
              you for your consideration.
            </p>
          </ContactInfo>
        </div>
      </div>
    </Constainer>
  );
}

const Constainer = styled.div`
  position: relative;
  background-color: #533575;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  & h1 {
    color: #ffffff;
    font-size: 30px;
    letter-spacing: 4px;
    width: fit-content;
    font-weight: 200;
    border-bottom: 2px solid #ffffff;
    padding-bottom: 1rem;
  }
  & span {
    display: block;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 2rem;
  }

  & p {
    color: #ffffff;
    font-size: 12px;
    line-height: 1.4rem;
    width: 90%;
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 24px;
    }
    .wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & input,
  select {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: none;
    background-color: #ffffff;
    font-size: 14px;
    letter-spacing: 1px;
  }

  & button {
    color: #ffffff;
    display: block;
    letter-spacing: 4px;
    padding: 1rem 3rem;
    margin-top: 1rem;
    background-color: transparent;
    border: 1px solid #ffffff;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    align-items: center;
    gap: 0.5rem;
    & input,
    select {
      padding: 0.5rem;
    }
    & button {
      padding: 0.5rem 2rem;
    }
  }
`;

const ContactInfo = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0;
  & h3 {
    display: inline-block;
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 5px;
    margin-bottom: 1rem;
  }
  & p {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    & h3 {
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
`;
