import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/child-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function ChildSupport() {
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
          <div>
            <p className="body-copy-bold">CHILD SUPPORT</p>
            <p className="body-copy">
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
