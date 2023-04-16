import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import AttorneyBanner from "@/components/UI/attorney-banner/attorneyBanner";
import banner from "../../../../public/images/Dally_Banner.png";
import profile from "../../../../public/images/Dally_profile.png";

export default function Dally() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="mally banner image"
        name={"LORI E. DALLY"}
        email={"LORI@TEXFAMILYLAWYER.COM"}
      />
      <div className="center-wrapper">
        <Content className="item">
          <p>
            As a legal assistant during law school, I was exposed to family law
            and immediately knew that’s the type of law I wanted to practice.
            Family Law gives me the ability to connect with people on a personal
            level, help solve problems and lead people through one of the
            toughest struggles of their lives. Whether it’s in the courtroom or
            in the office, I enjoy being able to effectively and zealously
            advocate for my clients and to change their lives for the better.
            <br />
            <br /> I grew up in Coppell, Texas and attended Ursuline Academy in
            Dallas. I am a graduate Texas Christian University and Texas
            Wesleyan School of Law (now Texas A&M School of Law). My husband and
            I are avid TCU fans and never miss a game. When we are not cheering
            on the Horned Frogs, you can usually find me spending quality time
            with my husband, three daughters, two dogs and one cat.
          </p>
          <span />
          <b>Education</b>
          <p>
            Texas Wesleyan University School of Law - Fort Worth, Texas (Now
            known as Texas A&M University School of Law) Juris Doctorate, 2010 -
            Graduated in the top 13% of class Dean’s List - Every semester Phi
            Delta Phi Law Review
            <br />
            <br />
            Texas Christian University - Fort Worth, Texas Bachelor of Science,
            Environmental Science, 2007 Delta Gamma Fraternity
          </p>
          <span />
          <b>Experience</b>
          <p>
            Seltzer Dally & Webb, PLLC - Fort Worth, Texas Attorney and
            Counselor at Law
            <br />
            <br />
            Seltzer & Dally, PLLC - Fort Worth, Texas Attorney and Counselor at
            Law
            <br />
            <br />
            Beal Law Firm - Southlake, Texas Senior Associate Attorney
            <br />
            <br />
            Antonio Olvera, Jr. and Associates - Dallas, Texas Associate
            Attorney
          </p>
          <span />
          <b>Memberships</b>
          <p>
            Licensed to practice before the Supreme Court of the United States
            <br />
            The College of the State Bar of Texas <br />
            Tarrant County Bar Association <br />
            Tarrant County Family Law Bar Association <br />
            State Bar of Texas <br />
            Family Law Section, State Bar of Texas
          </p>
          <span />
          <b>Awards</b>
          <p>
            2021 Top Women Attorney in Texas 2020, Texas Monthly <br />
            2021 Top Young Attorney in Texas, Texas Monthly <br />
            2016-2021 AVVO Client’s Choice <br />
            2019-2021 Texas Rising Stars, Super Lawyers <br />
            2020 Top Women Attorney in Texas Rising Stars, Texas Monthly <br />
            2020 Texas Outstanding Young Attorney, Texas Monthly <br />
            2017-2020 Fort Worth Magazine’s Top Attorney - Family Law <br />
            2019 Top Attorney - Texas Outstanding Young Women Lawyers, TeTexas
            Monthly <br />
            2019 Top Attorney - Texas Outstanding Young Lawyers, Texas Monthly
            <br />
            10 Best Attorneys - Texas Family Law by The American Institute of
            Family Law Attorneys <br />
            2017 Top Attorneys of North America
          </p>
          <span />
          <b>Community Involvement</b>
          <p>
            Fort Worth Pregnancy Center, President
            <br />
            Delta Gamma Fraternity - TCU, previous House Management Advisor
          </p>
          <span />
          <b>Publications</b>
          <p>
            SETTING YOUR CLIENT UP FOR SUCCESS: FROM FILING THE CASE TO
            TEMPORARY ORDERS AND BEYOND
          </p>
        </Content>
        <Image
          src={profile}
          alt="Dally profile picture"
          className="item"
          quality={100}
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
    max-width: 1300px;
    margin: 0 auto;
    padding: 6rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
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
  max-width: 800px;
  & b {
    font-weight: 600;
  }
  & p {
    font-size: 15px;
    margin-top: 0.5rem;
    letter-spacing: 1px;
    line-height: 1.3rem;
  }
  & span {
    display: block;
    width: 100%;
    max-width: 488px;
    border-top: 1px solid #67318d;
    margin: 2rem 0;
  }
`;
