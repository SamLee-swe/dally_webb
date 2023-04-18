import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import divorce from "../../../../public/images/divorce.png";
import childCustody from "../../../../public/images/child_custody.png";
import modification from "../../../../public/images/modification.png";

const Images = styled(Image)`
  width: 100%;
  max-width: 380px;
  height: auto;
  position: relative;
`;

export default function PracticeAreas() {
  return (
    <MainWrapper>
      <h1>PRACTICE AREAS</h1>
      <span />
      <div className="top-div">
        <p className="top-p">
          Whether you are facing a divorce, child custody dispute, or any other
          family law issue, we are here to fight for your rights and ensure that
          your voice is heard. Our priority is always to protect your interests
          and those of your family.
        </p>
        <Link className="button" href="/practice-areas">
          VIEW ALL AREAS
        </Link>
      </div>
      <ImageWapper>
        <div>
          <Images src={divorce} alt="divorce image" />
          <h3>DIVORCE</h3>
          <p>
            In Texas Law, there is no difference when referring to contested and
            uncontested divorces. Regardless of how agreeable, all cases are
            resolved through the same process of filing a Petition and then
            either requesting that the Court approve an agreement reached by the
            parties, or asking the Court to make a decision when an agreement
            cannot be reached.
          </p>
          <Link className="button" href="/practice-areas/uncontested-divorce">
            LEARN MORE
          </Link>
        </div>
        <div>
          <Images src={childCustody} alt="divorce image" />
          <h3>CHILD CUSTODY</h3>
          <p>
            The often used terms “full custody” or “sole custody” are not actual
            legal terms recognized by the state of Texas. It is presumed that
            all separated parents shall be named Joint Managing Conservators.
            This means all separated parents share equal rights and duties to
            their children.
          </p>
          <Link className="button" href="/practice-areas/child-custody">
            LEARN MORE
          </Link>
        </div>
        <div>
          <Images src={modification} alt="divorce image" />
          <h3>MODIFICATION</h3>
          <p>
            If you already have a court order in place, you may be able to
            modify it. If the order has become unworkable or you no longer
            believe the order is in your child’s best interest, this may be an
            option to consider. The burden of proof the court requires is to
            show a material and substantial change in circumstances has occurred
            since the entry of your prior order.
          </p>
          <Link className="button" href="/practice-areas/modification">
            LEARN MORE
          </Link>
        </div>
      </ImageWapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  & h1 {
    color: #67318d;
    letter-spacing: 2px;
    width: fit-content;
    font-weight: 700;
    border-bottom: 2px solid #67318d;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
    padding-bottom: 1rem;
    -webkit-text-stroke: 1px black;
  }
  & span {
    display: block;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
  }
  .top-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
  .top-p {
    display: inline-block;
    width: 70%;
    line-height: 1.8rem;
  }
  & p {
    font-size: 18px;
  }

  .button {
    font-size: 14px;
    background-color: transparent;
    letter-spacing: 4px;
    color: #67318d;
    border: 1px solid #67318d;
    padding: 1rem 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    & h1 {
      font-size: 24px;
    }
    .top-div {
      flex-direction: column;
      align-items: center;
    }
    .top-p {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

const ImageWapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & h3 {
    margin: 2rem 0 1rem;
    letter-spacing: 3px;
    color: #67318d;
    font-weight: 500;
  }

  & p {
    font-size: 18px;
    line-height: 1.8rem;
    max-width: 340px;
    height: 100%;
  }

  .button {
    margin: 2rem 0 4rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
