import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/divorce-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function SameSexDivorce() {
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
            <p className="body-copy-bold">SAME-SEX DIVORCE</p>
            <p className="body-copy">
              Prior to June of 2015, the Texas courts refused to recognize
              same-sex divorces because the State of Texas did not recognize
              same-sex marriage. On June 26, 2015, the Supreme Court heard the
              case Obergefell v. Hodges, which legalized same-sex marriage in
              all 50 states. This landmark case gave same-sex couples a legal
              avenue to get divorced in Texas.
              <br />
              <br />
              Same-sex divorces can involve unique property, child custody and
              paternity issues. Therefore, it is important to retain an attorney
              who is knowledgeable and experienced in these fields to provide
              you with the best possible advice and outcome.
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
