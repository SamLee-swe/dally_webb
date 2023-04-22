import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/grandparent-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";
import MobileDropDown from "@/components/mobile-dropdown-menu/mobileDropDown";

export default function grandparentRights() {
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
            <p className="body-copy-bold">GRANDPARENT RIGHTS</p>
            <p className="body-copy">
              The State of Texas gives great deference to parents in allowing
              them to raise and make decisions for their children without state
              or third party intervention or input. Unfortunately, this leaves
              little recourse under the law for grandparents who are seeking a
              relationship with their grandchildren if a parent is not
              voluntarily willing to maintain that relationship.
              <br />
              <br />
              However, in certain limited situations, like when a child is in
              immediate danger with the parent, Texas courts will consider
              giving custody to a grandparent or other immediate family member
              to safeguard the child&#39;s physical health and emotional
              well-being. This process can be very complex and requires that
              procedures are followed very specifically as set forth in the
              Family Code. Therefore, it is critical in these cases to hire a
              well-versed and experienced attorney to prepare, file, and argue
              the case on your behalf.
              <br />
              <br />
              Additionally, there are also very limited circumstances when a
              court will consider giving a Grandparent visitation with a child -
              but again, this requires a very high burden of proof to overcome
              the presumption in Texas that parents should have the freedom to
              make decisions for their children without state or third-party
              interference.
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
