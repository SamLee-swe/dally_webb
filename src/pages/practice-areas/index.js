import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../public/images/practice-areas-landing-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";
import MobileDropDown from "@/components/mobile-dropdown-menu/mobileDropDown";

export default function PracticeAreas() {
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
          <p className="body-copy">
            Family law is one of the most personal areas of the law to be
            involved in, whether you are getting a divorce, seeking custody of a
            child, adopting a child, or needing a modification. That is why it
            is crucial to hire the right attorney to handle your family law
            matter. We are dedicated to providing you with personal and
            professional services from the initial consultation until your case
            is closed.
            <br />
            <br />
            We take the time to understand your unique situation and explain the
            law as it relates to your case so that you can make the most
            informed decision possible when moving forward. We know that
            sometimes family law matters require aggressive action in order to
            deliver results, and we aren’t afraid to take action when necessary
            in order to protect your rights.
            <br />
            <br />
            We understand that you are trusting us with the most important and
            personal aspects of your life, and we are dedicated to safeguarding
            your most precious assets.
          </p>
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
    padding: 4rem;
    display: flex;
    justify-content: space-between;
  }

  .body-copy {
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
