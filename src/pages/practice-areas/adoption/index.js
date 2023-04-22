import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/child-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";
import MobileDropDown from "@/components/mobile-dropdown-menu/mobileDropDown";

export default function Adoption() {
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
            <p className="body-copy-bold">ADOPTION</p>
            <p className="body-copy">
              Adoption occurs when a party becomes the legal parent to a child.
              The most common form of adoption is a Step Parent Adoption.
              Currently, Texas only allows that a child can have two parents.
              Therefore, in order to proceed with a Step Parent Adoption, the
              parental rights of the biological parent must be terminated. This
              may have been done previously or it can be done in connection with
              the Adoption.
              <br />
              <br />
              We can also help if you are seeking to adopt a child through
              placement with a Private Adoption Agency, or if the child has been
              placed in your care through CPS.
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
