import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/practice-areas-landing-banner.png";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function ProtectiveOrders() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"practice-areas landing page banner image"}
        title="PRACTICE AREAS"
        left="310px"
      />
      <Container>
        <div className="wrapper">
          <PraceticeAreaList />
          <div>
            <h2>PROTECTIVE ORDERS</h2>
            <p className="text">
              In Texas, there are three types of orders of protection based on
              family violence: 1. Temporary ex parte protective order (only
              valid for a short period of time, but no notice is usually
              required to the other party); 2. Final (permanent) protective
              order (can be valid for years - but is only issued by the Court
              after notice and a hearing); and 3. Magistrate’s order of
              emergency protection (what most people call an emergency
              protective order).
              <br />
              <br />
              The first two orders can be issued by the family Court, while the
              third is only issued by a criminal Court after an arrest. The
              attorneys at Dally & Webb, PLLC are highly skilled and trained to
              assess a situation to determine if the facts are sufficient to
              support the burden of proof the Court requires for the issuance of
              a Protective Order - and can guide you through the process of
              obtaining such protection if you are the victim of family
              violence.
            </p>
          </div>
        </div>
        <WhyChooseUs />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  .wrapper {
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 6rem;
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    font-weight: 400;
    width: fit-content;
    margin-bottom: 2rem;
    letter-spacing: 4px;
    border-bottom: 1px solid #67318d;
    padding-bottom: 1.6rem;
  }

  .text {
    font-size: 17px;
    max-width: 760px;
    letter-spacing: 1px;
    line-height: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem 5rem;
    }
  }
`;
