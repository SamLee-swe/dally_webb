import Image from "next/image";
import styled from "styled-components";
import AttorneyBanner from "@/components/UI/attorney-banner/attorneyBanner";
import banner from "../../../../public/images/brewington_banner.png";
import SecondaryNav from "@/components/UI/attorney-secondary-nav/secondaryNav";
export default function Brewington() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="Brewington banner image"
        name={"MAX BREWINGTON"}
        email={"MAX@TEXFAMILYLAWYER.COM"}
        top={"-9px"}
        mobileTop={"15px"}
        priority={true}
      />
      <SecondaryNav />
      <div className="center-wrapper">
        <Content className="item">
          <p>
            When I finally decided to go to law school, I thought it best to
            focus on doing the most good for the greatest number of
            people—family law. The emotional intensity and typical complexity of
            the problems faced by family members suddenly embroiled in that kind
            of a contest require a steady hand and firm purpose. Since I have
            heard everything, nothing human will shock me.
            <br />
            <br /> My father was a high-school coach so we moved often; however,
            I consider myself a ‘Sooner’ since I was born in Miami, Oklahoma. I
            graduated from a small high school in Southeastern Kansas; spent one
            semester at a college hoping to play football at the next level; and
            then came to my senses by enrolling at Pittsburg State University.
            After graduation I considered medical school or law school BEFORE I
            finally agreed to enter the seminary. I was sent to Holy Trinity
            Seminary on the campus of University of Dallas. Ordained in 1977 I
            finally decided to go to law school in Georgia: the Walter F. George
            School of Law at Mercer University, Macon, Georgia.
            <br />
            <br />
            My daughter, Mary, graduated from Nolan High School and is currently
            enrolled at OSU, Stillwater, Oklahoma; she is majoring in Education.
            My wife, Johanna, is the manager of the Major Gifts Team, Catholic
            Charities, Fort Worth. She raises money for the agency to eradicate
            poverty, one family at a time. We attend Mass at St. Patrick’s
            Cathedral, downtown Fort Worth. No pets now—our dear Asta died in
            2016 at the age of 18 and we are not ready to adopt another dog YET.
          </p>
          <span />
          <b>Education</b>
          <p>
            Galena Kansas High School: Valedictorian
            <br />
            Pittsburg State University, 1972 BA; Sigma Chi; Who’s Who; Student
            Senate; IFC President
            <br />
            University of Dallas 1977
            <br />
            Juris Doctor, WFG School of Law, Mercer University
          </p>
          <span />
          <b>Experience</b>
          <p>
            Max Brewington, Attorney at Law 1997-2008 [sole practice: family
            law; DFPS cases; juvenile law]
            <br />
            Assistant DA, Dallas County District Attorney, Juvenile Division
            [2008-2011]
            <br />
            Max Brewington, Attorney at Law 2011-2020 [sole practice: as above].
            <br />
            Schreier & Housewirth, 2020-2021; associate attorney
          </p>
          <span />
          <b>Memberships</b>
          <p>
            State Bar of Texas; former member, Juvenile Law section of the State
            Bar of Texas
            <br />
            Membership pending: Tarrant County Bar Association and TC Family Law
            Bar Association
          </p>
        </Content>
        <Image
          src={banner}
          alt="Webb profile picture"
          className="item"
          style={{
            height: "auto",
            maxHeight: "472px",
            width: "100%",
            maxWidth: "418px",
          }}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .center-wrapper {
    width: 100%;
    max-width: 1230px;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 1300px) {
    .center-wrapper {
      padding: 2rem;
    }
    .item:nth-child(2) {
      order: -1;
      margin: 1rem 0 2rem;
    }
  }
`;

const Content = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 752px;
  & b {
    font-weight: 700;
    display: block;
  }
  & p {
    margin-top: 0.5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    display: inline-block;
  }

  & span {
    display: block;
    width: 100%;
    max-width: 488px;
    border-top: 1px solid #67318d;
    margin: 2rem 0;
  }
`;
