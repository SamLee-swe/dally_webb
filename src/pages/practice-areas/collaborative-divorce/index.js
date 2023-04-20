import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/practice-areas-landing-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function CollaborativeDivorce() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"practice-areas landing page banner image"}
        title="PRACTICE AREAS"
        left="75px"
      />
      <Container>
        <div className="wrapper">
          <PraceticeAreaList />
          <div>
            <p className="body-copy-bold">COLLABORATIVE DIVORCE</p>
            <p className="body-copy">
              Collaborative Divorce is a relatively new trend in Family Law in
              which both parties commit to settle all issues outside of the
              courtroom. The parties retain a Financial Expert to help them with
              all of their property issues and a Mental Health Professional to
              address communication and issues surrounding custody and support
              of the children.
              <br />
              <br />
              Collaborative Divorce is very different from the traditional
              divorce process in that the parties work through their divorce
              together with a team, in a series of meetings, rather than one
              spouse against the other. It is important to realize that if you
              begin the divorce process through Collaborative Law and then the
              negotiation falls apart, both parties must retain new attorneys,
              because attorneys who participate in the Collaborative process are
              not ethically permitted to then serve as an attorney in the
              litigation process.
              <br />
              <br />
              While not the right fit for every situation, Collaborative Divorce
              can be a unique and invaluable way to end your marriage in an
              amicable and respectful manner and avoid unnecessary conflict in
              the divorce process.
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

  @media (max-width: 1068px) {
    .wrapper {
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem 5rem;
    }
  }
`;
