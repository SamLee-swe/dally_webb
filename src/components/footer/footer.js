import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import footerLogo from "../../../public/images/DallyWebb_logo_footer.png";

export default function Footer() {
  return (
    <FooterContainer>
      <Image
        src={footerLogo}
        alt="footer logo"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          position: "relative",
          marginTop: "-2rem",
        }}
      />
      <Wapper>
        <div className="inside-wrapper">
          <Link href="/contact-us">
            <h5>FORT WORTH OFFICE</h5>
          </Link>
          <span />
          <p>
            2813 S. Hulen Street, Suite 250
            <br /> Fort Worth, Texas 76109* <br />
            Tel: 817-409-1136 <br />
            Fax: 817-887-4244 <br />
            lori@texfamilylawyer.com <br />
          </p>
          <p className="italic">*Principal Office</p>
        </div>
        <div className="inside-wrapper">
          <Link href="/contact-us">
            <h5>GRANBURY OFFICE</h5>
          </Link>
          <span />
          <p>
            106 S. Jones St. <br />
            Granbury, Texas 76048 <br />
            Tel: 817-408-3541 <br />
            Fax: 817-887-4244 <br />
            daniel@texfamilylawyer.com
          </p>
        </div>
        <div className="inside-wrapper">
          <Link href="/attorneys">
            <h5>ATTORNEYS</h5>
          </Link>
          <span />
          <ul>
            <li>
              <Link href="/attorneys/dally">Lori E. Dally</Link>
            </li>

            <li>
              <Link href="/attorneys/webb">Daniel P. Webb</Link>
            </li>

            <li>
              <Link href="/attorneys/brewington">Max Brewington</Link>
            </li>
          </ul>
        </div>
      </Wapper>
      <p className="rights">
        &#169; 2023 Dally & Webb Family Law, PLLC. All rights reserved. Legal.
      </p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  position: relative;
  background-color: #272d47;
  padding: 2rem 4rem;

  .rights {
    color: #ffffff;
    width: 100%;
    text-align: end;
    font-size: 10px;
  }

  @media (max-width: 768px) {
    .rights {
      font-size: 8px;
      text-align: center;
    }
  }
`;

const Wapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  .inside-wrapper {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    max-width: 376px;
  }
  & span {
    display: block;
    width: 100%;
    max-width: 300px;
    border-top: 1px solid #67318d;
    margin: 1rem 0;
  }

  & p,
  h5 {
    color: #ffffff;
  }

  & h5 {
    letter-spacing: 3px;
  }

  & p {
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 1.8;
  }

  .italic {
    font-style: italic;
    font-size: 11px;
  }
  & ul {
    list-style: none;
    line-height: 1.7;
    & li {
      color: #ffffff;
      font-size: 13px;
    }
  }

  @media (max-width: 1300px) {
    margin-top: 2rem;
    .inside-wrapper {
      margin-bottom: 2rem;
    }
  }
`;
