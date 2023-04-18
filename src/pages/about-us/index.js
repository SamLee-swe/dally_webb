import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../public/images/about-us-banner.png";
import mainPic from "../../../public/images/about-us-main.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"about-us landing page banner image"}
        title="ABOUT US"
        left="400px"
      />
      <Container>
        <div className="center-wrapper">
          <div className="image-wrapper">
            <Image
              src={mainPic}
              alt="Phone icon"
              width={454}
              height={400}
              style={{
                width: "100%",
                maxWidth: "454px",
                height: "auto",
              }}
            />

            <h3>
              To schedule a consultation, call 817-409-1136 or contact us online
              through the form below.
            </h3>
          </div>

          <InfoBox>
            <p>
              We are passionate about helping resolve conflicts for our clients
              and their families. Our experienced attorneys are dedicated to
              providing you with the highest quality legal representation, and
              we will work tirelessly to protect your rights and interests.
              <br />
              <br />
              We understand that family law matters can be emotionally charged
              and stressful, which is why we are committed to being there for
              you every step of the way. Our team will guide you through the
              process with compassion and professionalism, and we will always
              keep your best interests in mind.
              <br />
              <br />
              Whether you are dealing with a divorce, child custody dispute, or
              any other family law matter, we will fight to ensure that your
              voice is heard and that you receive the best possible outcome.
              <br />
              <br />
            </p>
            <ul>
              <li>Virtual consultation via Zoom available upon request.</li>
              <li>
                Our Fort Worth office is conveniently located on Hulen Street,
                free from central downtown traffic.
              </li>
              <li>
                Our Granbury office is located right off the historic downtown
                square in Granbury.
              </li>
              <li>
                Parking is available and complimentary at both of our locations.
              </li>
              <li>Credit cards are accepted.</li>
            </ul>
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
  padding: 6rem;

  .center-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    margin-bottom: 8rem;
  }
  .image-wrapper {
    display: inline-block;
    & h3 {
      color: #67318d;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 1.5;
      margin-top: 1rem;
      max-width: 350px;
    }
  }
  .lower-text {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
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

  & p {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 1.8;
  }
  & ul {
    padding-left: 1rem;

    & li {
      font-size: 15px;
      letter-spacing: 1px;
      line-height: 1.5;
    }
  }
  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;
