import styled from "styled-components";

export default function WhyChooseUs() {
  return (
    <Constainer>
      <div>
        <p className="title">WHY CHOOSE US</p>
        <span />
        <p>
          We understand the importance of effective communication, and we are
          committed to keeping you informed throughout your case. We will work
          tirelessly to achieve the best possible outcome for you and your loved
          ones.
          <br />
          <br />
          Contact us today to schedule a consultation and find out how we can
          help you with your family law needs. We are here for you every step of
          the way.
        </p>
      </div>
    </Constainer>
  );
}

const Constainer = styled.div`
  background-color: #f5f5f5;

  & div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }
  .title {
    color: #67318d;
    font-size: 30px;
    letter-spacing: 2px;
    width: fit-content;
    border-bottom: 2px solid #67318d;
    padding-bottom: 1rem;
  }
  & span {
    display: block;
    border-bottom: 1px solid black;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 22px;
    line-height: 1.8rem;
    width: 90%;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 24px;
    }
    & p {
      font-size: 18px;
      letter-spacing: 0;
    }
  }
`;
