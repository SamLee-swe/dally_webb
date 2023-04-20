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
      />
      <Container>
        <div className="center-wrapper">
          <NameBox>
            <Link href={"/attorneys/dally"}>
              <p className="attorney-name">LORI E. DALLY</p>
            </Link>
            <Link href={"/attorneys/webb"}>
              <p className="attorney-name">DANIEL WEBB</p>
            </Link>
            <Link href={"/attorneys/brewington"}>
              <p className="attorney-name">MAX BREWINGTON</p>
            </Link>
          </NameBox>
          <p className="body-copy">
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
    padding: 4rem;
    display: flex;
    justify-content: space-between;
  }

  .body-copy {
    max-width: 800px;
  }

  @media (max-width: 868px) {
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

  .attorney-name {
    color: #808080;
    font-size: 20px;
    font-weight: 500;
    :hover {
      color: #c293ff;
    }
  }

  @media (max-width: 868px) {
    margin-bottom: 2rem;
    flex-direction: row;
    max-width: 350px;
    padding-top: 1rem;

    .attorney-name {
      font-size: 14px;
    }
  }
`;
