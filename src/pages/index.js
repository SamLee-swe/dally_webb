import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import mainPic from "../../public/images/home-main.png";
import PracticeAreas from "@/components/main/practice-areas/practiceAreas";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";

export default function Home() {
  return (
    <Container>
      <ImageContainer>
        <div className="wrapper">
          <Image
            src={mainPic}
            alt="main content area image"
            quality={100}
            priority={true}
            className="main-image item"
          />
          <MainText className="item">
            <p className="main-top-text">DIVORCE</p>
            <span />
            <p className="main-top-text">CUSTODY</p>
            <span />
            <p className="main-top-text">CHILD SUPPORT</p>
            <span />
            <p className="main-text">
              At Dally & Webb Family Law, PLLC, we are dedicated to providing
              you with an unparalleled level of legal representation for all
              your family law needs. Our team of experienced attorneys
              understands the complexities and sensitivities involved in family
              law matters, and we are here to guide you through every step of
              the process.
            </p>
          </MainText>
        </div>

        <ConsultationButtonBox>
          <p className="location-title">OFFICES IN FORT WORTH AND GRANBURY</p>
          <Link className="button" href={"/contact-us"}>
            BOOK A CONSULTATION
          </Link>
        </ConsultationButtonBox>
      </ImageContainer>
      <PracticeAreas />
      <WhyChooseUs />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 648px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 45, 71, 0.8);
    z-index: -1;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/images/main-background.png") no-repeat;
    object-fit: contain;
    background-size: 100% 100%;
    z-index: -2;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .main-image {
    width: 100%;
    max-width: 590px;
    height: auto;
  }

  @media (max-width: 1400px) {
    height: 560px;
    .main-image {
      max-width: 400px;
      margin-top: 7rem;
    }
  }
  @media (max-width: 795px) {
    .wrapper {
      flex-direction: column;
    }
    .main-image {
      max-width: 350px;
      margin-top: 0rem;
    }
    .item:nth-child(2) {
      order: -1;
    }
  }
`;

const MainText = styled.div`
  width: 100%;
  max-width: 648px;
  margin-bottom: 3rem;

  & span {
    display: block;
    width: 100%;
    max-width: 511px;
    border-top: 2px solid #67318d;
    margin: 1rem 0;
  }

  .main-top-text {
    color: #ffffff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 30px;
    letter-spacing: 0.25em;
  }

  .main-text {
    color: #ffffff;
    font-family: "Montserrat";
    font-style: normal;
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 1400px) {
    margin-bottom: 0;
    .main-top-text {
      font-size: 22px;
      letter-spacing: 6px;
    }
    & span {
      max-width: 300px;
      margin: 0.3rem 0;
    }
    .main-text {
      font-size: 16px;
    }
  }
  @media (max-width: 795px) {
    padding: 1rem;
    margin-top: 4rem;
    .main-top-text {
      font-size: 16px;
      letter-spacing: 4px;
      line-height: 1.2rem;
    }
    & span {
      max-width: 200px;
      margin: 0.1rem 0;
    }
    .main-text {
      font-size: 12px;
      line-height: 1.2rem;
    }
  }
`;

const ConsultationButtonBox = styled.div`
  background-color: #533575;
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  background-color: rgba(83, 53, 117, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .location-title {
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 6px;
    display: inline-block;
    margin-right: 3rem;
    opacity: 1;
  }

  .button {
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 10px 40px;

    :hover {
      border: 1px solid #c293ff;
      color: #c293ff;
    }
  }

  @media (max-width: 1400px) {
    justify-content: space-evenly;
    bottom: -100px;
    background-color: #533575;
    .location-title {
      text-align: center;
      font-size: 16px;
      letter-spacing: 3px;
      margin-right: 0;
    }
    .button {
      font-size: 12px;
      letter-spacing: 3px;
      padding: 0.2rem 1rem;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 795px) {
    flex-direction: column;

    .location-title {
      font-size: 12px;
      letter-spacing: 2px;
    }
    .button {
      font-size: 10px;
      letter-spacing: 2px;
      padding: 0.1rem 1rem;
    }
  }
`;
