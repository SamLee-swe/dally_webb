import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import mainPic from "../../public/images/Main_content_area.png";
import PracticeAreas from "@/components/main/practice-areas/practiceAreas";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Image
        src={mainPic}
        alt="main content area image"
        size="100vw"
        width={700}
        height={475}
        quality={100}
        priority={true}
        style={{
          margin: "-2px auto",
          width: "100%",
          height: "auto",
          position: "relative",
        }}
      />
      <ConsultationButtonBox>
        <h1>OFFICES IN FORT WORTH AND GRANBURY</h1>
        <button onClick={() => router.push("/contact-us")}>
          BOOK A CONSULTATION
        </button>
      </ConsultationButtonBox>
      <PracticeAreas />
      <WhyChooseUs />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ConsultationButtonBox = styled.div`
  background-color: #533575;
  position: relative;
  width: 100%;
  height: 100px;
  bottom: 146px;
  background-color: rgba(83, 53, 117, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 6px;
    display: inline-block;
    margin-right: 3rem;
    opacity: 1;
  }

  & button {
    background-color: transparent;
    letter-spacing: 6px;
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 1rem 2rem;
    cursor: pointer;
  }
  @media (max-width: 1600px) {
    & h1 {
      font-size: 16px;
    }
  }
  @media (max-width: 1200px) {
    justify-content: space-around;
    flex-direction: column;
    height: 60px;
    bottom: 13px;
    background-color: rgba(83, 53, 117, 1);

    & h1 {
      text-align: center;
      font-size: 11px;
      letter-spacing: 3px;
      margin-right: 0;
    }
    & button {
      font-size: 9px;
      letter-spacing: 3px;
      padding: 0.2rem 1rem;
      margin-bottom: 10px;
    }
  }
`;
