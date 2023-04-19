import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import footerLogo from "../../../public/images/DallyWebb_logo_footer.png";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
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
              <p className="footer-title">FORT WORTH OFFICE</p>
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
              <p className="footer-title">GRANBURY OFFICE</p>
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
              <p className="footer-title">ATTORNEYS</p>
            </Link>
            <span />
            <ul>
              <Link href="/attorneys/dally">
                <li>Lori E. Dally</li>
              </Link>

              <Link href="/attorneys/webb">
                <li>Daniel P. Webb</li>
              </Link>

              <Link href="/attorneys/brewington">
                <li>Max Brewington</li>
              </Link>
            </ul>
          </div>
        </Wapper>
        <p className="rights">
          &#169; 2023 Dally & Webb Family Law, PLLC. All rights reserved. Legal.
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  position: relative;
  background-color: #272d47;
  padding: 2rem;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
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
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 4rem 6rem;
  width: 100%;
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
  .footer-title {
    color: #ffffff;
    font-size: 14px;
  }

  .footer-title {
    letter-spacing: 3px;
    transition: 0.3s ease-in-out;
    :hover {
      color: #c293ff;
    }
  }

  .italic {
    font-style: italic;
  }
  & ul {
    list-style: none;
    & li {
      color: #ffffff;
      font-size: 14px;
      transition: 0.3s ease-in-out;
      :hover {
        color: #c293ff;
      }
    }
  }

  @media (max-width: 1300px) {
    margin: 2rem 0 0 3rem;
    & span {
      max-width: 220px;
    }
    .inside-wrapper {
      margin-bottom: 2rem;
    }
  }
`;
