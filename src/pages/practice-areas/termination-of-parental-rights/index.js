import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/grandparent-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function TerminationOfParentalRights() {
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
            <p className="body-copy-bold">TERMINATION OF PARENTAL RIGHTS</p>
            <p className="body-copy">
              When this process is voluntary, it is often referred to as
              &#34;relinquishment.&#34; A court can also order termination of
              rights involuntarily in certain limited circumstances such as when
              abuse or neglect has occurred, or when a parent is absent or fails
              to support a child for an extended period of time. The Court must
              find that one of the grounds for termination listed in the Family
              Code has been met, and that termination of parental rights is in
              the child&#39;s best interest, which is a very high standard of
              proof.
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
