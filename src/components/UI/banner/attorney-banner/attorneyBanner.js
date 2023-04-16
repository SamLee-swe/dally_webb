import Image from "next/image";
import styled from "styled-components";

export default function attorneyBanner(props) {
  return (
    <Container top={props.top} mobileTop={props.mobileTop}>
      <Title>
        <h1>{props.name}</h1>
        <h2>ATTORNEY & COUNSELOR AT LAW</h2>
      </Title>
      <Image className="attorney-banner-img" src={props.src} alt={props.alt} />

      <Contact>
        <h4>817-409-1136</h4>
        <h4>{props.email}</h4>
      </Contact>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #272d47;
  .attorney-banner-img {
    width: 100%;
    max-width: 552px;
    height: auto;
    position: absolute;
    right: 10rem;
    z-index: 999;
    top: ${(props) => (props.top ? props.top : "-18px")};
  }
  @media (max-width: 768px) {
    height: 200px;
    .attorney-banner-img {
      max-width: 250px;
      right: -2rem;
      top: ${(props) => (props.mobileTop ? props.mobileTop : "11px")};
    }
  }
`;

const Title = styled.div`
  position: absolute;
  top: 6rem;
  left: 18rem;

  & h1 {
    font-size: 3rem;
    color: #ffffff;
    letter-spacing: 12px;
    border-bottom: 2px solid #67318d;
    width: fit-content;
    padding-bottom: 1rem;
  }
  & h2 {
    color: #ffffff;
    letter-spacing: 5px;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    left: 6px;
    top: 3rem;
    font-size: 12px;
    padding: 0.5rem 1rem;
    & h1 {
      font-size: 1.2rem;
      letter-spacing: 5px;
      border-bottom: 1px solid #67318d;
      padding-bottom: 0.5rem;
    }
    & h2 {
      font-size: 0.6rem;
      letter-spacing: 2px;
      margin-top: 0.5rem;
    }
  }
`;
const Contact = styled.div`
  width: 100%;
  background-color: rgba(83, 53, 117, 0.7);
  padding: 1.3rem;
  position: absolute;
  bottom: 0;

  & h4 {
    color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: 4px;
    margin: 0.5rem 0 0.5rem 17rem;
  }

  @media (max-width: 768px) {
    padding: 0.2rem;
    & h4 {
      font-size: 0.4rem;
      letter-spacing: 2px;
      margin: 0.5rem 0 0.5rem 1rem;
    }
  }
`;
