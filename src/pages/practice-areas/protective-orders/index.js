import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/practice-areas-landing-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";
import MobileDropDown from "@/components/mobile-dropdown-menu/mobileDropDown";

export default function ProtectiveOrders() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"practice-areas landing page banner image"}
        title="PRACTICE AREAS"
      />
      <Container>
        <div className="wrapper">
          <PraceticeAreaList />
          <span className="mobile-dropdwon">
            <MobileDropDown title={"Practice Areas"} />
          </span>
          <div>
            <p className="body-copy-bold">PROTECTIVE ORDERS</p>
            <p className="body-copy">
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
    padding: 4rem 4rem 8rem 4rem;
    display: flex;
    justify-content: space-between;
  }
  .body-copy-bold {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.25em;
    border-bottom: 1px solid #67318d;
    padding-bottom: 1.2rem;
  }

  .body-copy {
    margin-top: 1.5rem;
    max-width: 760px;
  }

  .mobile-dropdwon {
    display: none;
  }

  @media (max-width: 1300px) {
    .mobile-dropdwon {
      width: 100%;
      max-width: 492px;
      height: 44px;
      box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
      display: block;
      margin-bottom: 2rem;
    }
    .wrapper {
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem 5rem;
    }
  }
`;
