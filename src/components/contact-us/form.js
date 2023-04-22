import styled from "styled-components";
import PhoneIcon from "../../../public/images/phone_icon.png";
import EmailIcon from "../../../public/images/email_icon.png";
import Image from "next/image";
import Link from "next/link";
import DropDownComponent from "../dropdown-menu/dropDownMenu";

export default function ContactUs() {
  const locations = ["Fort Worth", "Granbury"];
  const preferences = [
    "Divorce",
    "Child Support/Custody",
    "Modification",
    "Other",
  ];
  return (
    <Constainer>
      <div className="container">
        <p className="title">CONTACT US</p>
        <span className="line" />
        <div className="wrapper">
          <ContactForm>
            <input className="one" type="text" placeholder="Name*" required />
            <input
              className="two"
              type="text"
              placeholder="Email Address*"
              required
            />
            <input
              className="three"
              type="text"
              placeholder="Phone Number*"
              required
            />
            <DropDownComponent title={"Office Preference*"} menu={locations} />
            <DropDownComponent title={"Area of Interest*"} menu={preferences} />

            <button className="six">SUBMIT INFO</button>
          </ContactForm>
          <ContactInfo>
            <div style={{ width: "100%" }}>
              <Image
                src={PhoneIcon}
                alt="Phone icon"
                width={15}
                height={15}
                style={{
                  width: "auto",
                  height: "auto",
                  marginRight: "2rem",
                  display: "inline-block",
                }}
              />
              <p className="office-infos">FORT WORTH - 817-409-1136</p>
              <br />
              <Image
                src={PhoneIcon}
                alt="Phone icon"
                width={15}
                height={15}
                style={{
                  width: "auto",
                  height: "auto",
                  marginRight: "2rem",
                  display: "inline-block",
                }}
              />
              <p className="office-infos">GRANBURY - 817-408-3541</p>
              <br />

              <Image
                src={EmailIcon}
                alt="Email icon"
                width={23}
                height={23}
                style={{
                  height: "auto",
                  width: "auto",
                  marginRight: "1.5rem",
                  display: "inline-block",
                }}
              />
              <p className="office-infos">LORI@TEXFAMILYLAWYER.COM</p>
            </div>

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

  .title {
    width: fit-content;
    color: #ffffff;
    font-size: 30px;
    letter-spacing: 2px;
    width: fit-content;
    border-bottom: 2px solid #ffffff;
    padding-bottom: 1rem;
  }
  .line {
    display: block;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 2rem;
  }

  & p {
    color: #ffffff;
    font-size: 12px;
    line-height: 1.5;
  }
  @media (max-width: 1300px) {
    .wrapper {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    .title {
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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  & input {
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
  }

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

const ContactInfo = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0;
  .office-infos {
    display: inline-block;
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 4px;
    margin: 0.5rem 0 1rem 0;
    vertical-align: middle;
  }
  & p {
    margin-top: 2rem;
  }
  @media (max-width: 1300px) {
    margin-top: 1rem;
    max-width: 100%;
    .office-infos {
      margin: 0;
      font-size: 12px;
    }
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
