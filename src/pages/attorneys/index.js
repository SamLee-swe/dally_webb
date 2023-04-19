import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../public/images/attorney-landing-banner.png";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";

export default function Attorneys() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"attorney landing page banner image"}
        title="ATTORNEYS"
        left="370px"
      />
      <Container>
        <div className="center-wrapper">
          <NameBox>
            <Link href={"/attorneys/dally"}>
              <h3>LORI E. DALLY</h3>
            </Link>
            <Link href={"/attorneys/webb"}>
              <h3>DANIEL WEBB</h3>
            </Link>
            <Link href={"/attorneys/brewington"}>
              <h3>MAX BREWINGTON</h3>
            </Link>
          </NameBox>
          <p className="upper-text">
            At Dally & Webb Family Law, PLLC, we are dedicated to providing you
            with an unparalleled level of legal representation for all your
            family law needs. Our team of experienced attorneys understands the
            complexities and sensitivities involved in family law matters, and
            we are here to guide you through every step of the process.
            <br />
            <br />
            Whether you are facing a divorce, child custody dispute, or any
            other family law issue, we are here to fight for your rights and
            ensure that your voice is heard. Our priority is always to protect
            your interests and those of your family.
          </p>
        </div>
        <WhyChooseUs />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  .center-wrapper {
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 6rem;
    display: flex;
    justify-content: space-between;
  }

  .upper-text {
    font-size: 17px;
    max-width: 800px;
    letter-spacing: 1px;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    .center-wrapper {
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem 5rem;
    }
  }
`;

const NameBox = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-top: 1px solid #67318d;
  letter-spacing: 2px;

  & h3 {
    color: #808080;
    :hover {
      color: #67318d;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    flex-direction: row;
    max-width: 350px;
    padding-top: 1rem;

    & h3 {
      font-size: 14px;
    }
  }
`;
