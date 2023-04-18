import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/child-banner.png";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function ChildSupport() {
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
            <h2>CHILD SUPPORT</h2>
            <p className="text">
              When parents of a child are separated, the Family Code provides
              guidelines for the calculation of child support to ensure that the
              parent with whom the child primarily resides has the resources
              (money) to provide for the needs of the child. These calculations
              are based on the income of the non-custodial/non-primary parent,
              taking into consideration if that parent has other children to
              whom they owe a duty of support.
              <br />
              <br />
              In certain situations, the court can deviate from these
              guidelines, taking into account factors like how much time the
              child spends with each parent, if a child has certain medical or
              educational needs, if the child is disabled or has expenses beyond
              what guideline support can provide, or when the parent who owes
              support earns less than a certain amount per month and their
              monthly net resources are considered “low-income.”
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
