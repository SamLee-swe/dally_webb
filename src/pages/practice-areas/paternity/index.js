import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/grandparent-banner.png";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function Paternity() {
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
            <h2>PATERNITY</h2>
            <p className="text">
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
