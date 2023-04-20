import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/practice-areas-landing-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function Modification() {
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
            <p className="body-copy-bold">MODIFYING CUSTODY OR CHILD SUPPORT</p>
            <p className="body-copy">
              If you already have a court order in place and the order has
              become unworkable or you no longer believe that the order is in
              your children’s best interest, you may be able to modify your
              current order. The burden of proof the court will require is that
              you show a material and substantial change in circumstances has
              occurred since the entry of your prior order. Examples may be when
              a parent moves, remarries, develops drug, alcohol or mental health
              issues or new issues arise with your children. If you have
              concerns about the other parent and the safety of your child in
              their care, it is imperative that you take action immediately. If
              you wait too long, the court can view your lack of action as lack
              of concern.
              <br />
              <br />A party can modify a previous Child Support Order if there
              has been a material and substantial change in circumstances (such
              as one parent losing their job) or it has been 3 years since the
              last child support order and the amount that would be ordered
              differs by either 20% or $100 dollars. If there has been a change
              in circumstance where you are no longer able to make your monthly
              child support payment, it is important to file a Modification
              immediately because the court can only retroactively reduce your
              child support obligation back to the day you filed the
              modification lawsuit - not the date the change in circumstances
              occurred.
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
