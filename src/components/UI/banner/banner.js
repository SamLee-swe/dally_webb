import Image from "next/image";
import styled from "styled-components";

export default function Banner(props) {
  return (
    <Container>
      <Image
        src={props.src}
        alt={props.alt}
        width={1440}
        height={274}
        style={{
          objectFit: `contain`,
          width: "100%",
          height: `auto`,
          margin: `${(props) => props.margin}`,
        }}
      />
      <Title>{props.title}</Title>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled.h2`
  position: absolute;
  color: #ffffff;
  bottom: 5px;
  left: 100px;
  width: fit-content;
  background-color: rgba(83, 53, 117, 0.8);
  padding: 1rem 2rem;
  letter-spacing: 6px;
`;