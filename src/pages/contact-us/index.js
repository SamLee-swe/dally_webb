import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../public/images/attorney-landing-banner.png";
import GoogleMap from "@/components/google-map/googleMap";

export default function ContactUs() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"attorney landing page banner image"}
        title="CONTACT US"
        left="490px"
      />
      <Container>
        <div className="center-wrapper">
          <GoogleMap />
          <InfoBox>
            <div>
              <h3>
                To schedule a consultation, call 817-887-9206 or contact us
                online through the form below.
              </h3>
            </div>

            <div className="inside-wrapper">
              <h5>FORT WORTH OFFICE</h5>
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
              <h5>GRANBURY OFFICE</h5>
              <span />
              <p>
                106 S. Jones St. <br />
                Granbury, Texas 76048 <br />
                Tel: 817-408-3541 <br />
                Fax: 817-887-4244 <br />
                daniel@texfamilylawyer.com
              </p>
            </div>
          </InfoBox>
        </div>
        <p className="lower-text">
          **DISCLAIMER: This website presents general information about Dally &
          Webb Family Law, PLLC and is not intended as legal advice nor should
          you consider it as such. You should not act upon this information
          without seeking professional counsel. Please keep in mind that merely
          contacting Dally & Webb Family Law, PLLC will not establish an
          attorney-client relationship. Dally & Webb Family Law, PLLC cannot
          represent you until the firm knows there would not be a conflict of
          interest, and the firm determines that it is otherwise able to accept
          the engagement. Accordingly, please do not send Dally & Webb Family
          Law, PLLC any information or documents until a formal attorney-client
          relationship has been established through a consultation with an
          attorney and you get authorization in the form of an engagement letter
          or contract for legal services from Dally & Webb Family Law, PLLC. Any
          information or documents sent prior to your receipt of an engagement
          letter or contract for legal services cannot be treated as
          confidences, secrets or protected information of any nature.
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 5rem;

  .center-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
  }
  .lower-text {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    font-size: 10px;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    .center-wrapper {
    }
  }
`;

const InfoBox = styled.div`
  width: 100%;
  max-width: 620px;
  & span {
    display: block;
    width: 100%;
    max-width: 230px;
    border-top: 2px solid #67318d;
    margin: 1rem 0;
  }
  & h3 {
    color: #67318d;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.5;
  }
  & h5 {
    letter-spacing: 3px;
    font-size: 16px;
    margin-top: 3rem;
    font-weight: 400;
  }

  & p {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 1.8;
  }
  .italic {
    font-style: italic;
    font-size: 14px;
  }

  .inside-wrapper {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    max-width: 376px;
  }

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;
