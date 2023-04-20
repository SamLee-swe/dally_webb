import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/grandparent-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function Paternity() {
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
            <p className="body-copy-bold">PATERNITY</p>
            <p className="body-copy">
              If you have never been declared the legal father of your child,
              either by being married to the mother, been named the legal father
              in a prior court order or by signing an Acknowledgment of
              Paternity (AOP) at the child’s birth, a Paternity action is
              necessary to establish legal rights to your child.
              <br />
              <br />
              Through this proceeding, genetic testing can be conducted and the
              biological father can be declared the legal father of the child
              for all legal purposes. If you are not named the legal father of
              your child, you have no rights to that child and cannot require
              the other parent to allow you to see the child. Through the
              paternity action, we can confirm parentage, set up access and
              possession schedules, and establish various other rights related
              to your child.
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
