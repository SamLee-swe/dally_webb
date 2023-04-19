import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/grandparent-banner.png";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function CPS() {
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
            <h2>CHILD PROTECTIVE SERVICES (CPS)</h2>
            <p className="text">
              The Department of Family and Protective Services, commonly known
              as DFPS, is an administrative agency. Child Protective Services
              (“CPS”) is a program within DFPS, designed to investigate and
              protect children from alleged abuse and/or neglect. While CPS
              provides many services and supports to promote safety within the
              family unit, investigations of alleged abuse or neglect must be
              taken extremely seriously, because CPS has the ability and
              authority to remove your children from your care - even if the
              allegations are later proven to be false. It might seem like
              complying with CPS&#39;s requests is your only option, or that
              working with CPS will close an investigation faster - but that can
              sometimes lead to providing information or evidence that is then
              used against you.
              <br />
              <br />
              If CPS feels that your children are in immediate danger, they have
              the power to seek a court order without prior notice to you to
              remove your child from your care and place them in Foster Care.
              Once a child is removed from a parent&#39;s care, it can become
              more difficult to have the child returned, in addition to the
              trauma it causes to the child and the entire family unit as a
              result.
              <br />
              <br />
              If you are contacted by CPS, it is imperative that you speak with
              an attorney immediately to discuss your rights, options, and a
              best course of action based on the allegations and facts of your
              specific case.
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
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem 5rem;
    }
  }
`;
