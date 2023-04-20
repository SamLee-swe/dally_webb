import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/practice-areas-landing-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function Mediation() {
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
            <p className="body-copy-bold">MEDIATION</p>
            <p className="body-copy">
              Either on written agreement between the parties or by order of the
              Court, the parties may attend mediation. Almost all Courts require
              that the parties attend mediation before proceeding to trial.
              Mediation is an alternative dispute resolution process in which a
              mediator seeks to work together with the parties to come to an
              acceptable agreement which is binding on all parties involved.
              <br />
              <br />
              In selecting a mediator, it is important to select an experienced
              mediator who not only is well versed in Family Law, but knows the
              Court in which the case is set and can give the parties helpful
              guidance based on prior experience in a specific Court. It is
              important to note that a mediator cannot provide either party with
              legal advice; therefore; it is important to retain an attorney to
              help advocate for you and advise you during the mediation process.
              <br />
              <br />
              While there is no requirement to enter into an agreement at
              mediation, the parties need to be aware that if an agreement is
              reached, reduced to writing, and signed, then the agreement is
              binding on the parties and irrevocable by the parties absent very
              extreme and rare circumstances.
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
