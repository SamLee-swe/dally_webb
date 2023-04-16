import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import AttorneyBanner from "@/components/UI/banner/attorney-banner/attorneyBanner";
import banner from "../../../../public/images/Webb_banner.png";
import profile from "../../../../public/images/Webb_profile.png";

export default function Webb() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="Webb banner image"
        name={"DANIEL P. WEBB"}
        email={"DANIEL@TEXFAMILYLAWYER.COM"}
      />
      <div className="center-wrapper">
        <Content className="item">
          <p>
            When I first opened my law practice, the only area of law that I
            didn’t want to practice was family law. However, over my first few
            years I discovered two things: One, I was very good at family law;
            and Two, I enjoyed being able to help people as they worked through
            some of the most important parts of their lives. I view it as part
            of my mission to help clients and their children suffer as little
            pain and trauma as possible through divorce and child custody
            battles. I take great pride in going the extra mile to achieve a
            client’s objectives. Being passionate about my profession, I have
            been Board Certified in Family Law since 2011, and I am a member of
            several statewide family law boards. Additionally, in 2021 I was
            admitted as a Fellow of the prestigious American Academy of
            Matrimonial Lawyers that is comprised of only nationwide experts in
            family law.
            <br />
            <br /> I grew up in Crowley, Texas and have lived in the Fort Worth
            area for nearly my entire life. I attended Abilene Christian
            University, and upon graduation, attended Texas Wesleyan University
            School of Law (now Texas A&M University School of Law). My wife and
            I are both very active in the Fort Worth community. We have two
            children and are both involved in their school, Southwest Christian.
          </p>
          <span />
          <b>Education</b>
          <p>
            Abilene Christian University Cum Laude, BBA
            <br />
            <br />
            Texas Wesleyan University School of Law <br />
            (now Texas A&M University School of Law) <br />
            Juris Doctorate, Cum Laude (top 10%)
          </p>
          <span />
          <b>Experience</b>
          <p>
            Seltzer Dally & Webb, PLLC - Fort Worth, Texas Attorney and
            Counselor at Law
            <br />
            The Law Offices of Daniel P. Webb Attorney and Counselor at Law
          </p>
          <span />
          <b>Memberships</b>
          <p>
            State Bar of Texas <br />
            Family Law Section, State Bar of Texas <br />
            American Academy of Matrimonial Lawyers - Fellow 2021 <br />
            The College of the State Bar of Texas <br />
            Licensed to practice before the Western, Northern, and Eastern
            Federal District Courts of Texas <br />
            Texas Academy of Family Law Specialists - Member <br />
            Texas Family Law Foundation - Lifetime Member <br />
            Texas Family Law Foundation - Board of Directors 2017 – Present
            <br />
            Texas Family Law Section - Pro Bono Committee 2020 - Present
            <br />
            Texas Academy of Family Law Specialists - Board Member 2021 –
            Present
            <br />
            Advanced Family Law Drafting CLE - Planning Committee – December
            2021
            <br />
            Family Law Essentials CLE – Granbury Course Director 2022
            <br />
            Texas Bar Foundation - FellowHood County Bar Association - Member
            <br />
            Hood County Bar Association - Past President 2013
            <br />
            Tarrant County Family Law Bar Association - Member
          </p>
          <span />
          <b>Awards</b>
          <p>
            2022 Top Attorney – Family Law, Fort Worth Magazine <br />
            2021-2022 Texas Super Lawyer <br />
            2012-2020 Texas Rising Stars, Super Lawyers
          </p>
          <span />
          <b>Community Involvement</b>
          <p>
            Team in Training - Leukemia & Lymphoma Society
            <br />
            Altamesa Church of Christ
            <br />
            Illuminate Ministries - Z3:17
            <br />
            Meals on Wheels of Tarrant County - Endowment Board
            <br />
            Leadership Granbury - Board Memhber and Alumni
          </p>
          <span />
          <b>Publications and Seminars</b>
          <p>
            Know When to Hold ‘Em, Know When to Fold ‘Em, Making & Responding to
            Objections, Advanced Family Law 101 2022, Author & Speaker
            <br />
            Unique Possession Schedules, Advanced Family Law Drafting 2021,
            Author & Speaker
            <br />
            TAFLS Trial Institute 2021, Faculty & Speaker
            <br />
            Think (What Are You Trying to Do to Me): Overlooked SAPCR Issues,
            Advanced Family Law Seminar 2020, Author & Speaker
            <br />
            Initial Client Interview, Family Law Essentials 2020, Speaker
            <br />
            Custody Cases on a Shoestring, Family Law Essentials 2019, Speaker
            <br />
            Characterization of Property, Family Law Essentials 2018, Speaker
            <br />
            UCCJEA, Family Law Essentials 2014, Speaker
            <br />
            Alphabet Soup - UCCJEA and UIFSA, Family Law Essentials 2014,
            Speaker
            <br />
            Rights, Powers and Duties: Creative Solutions, Family Law Essentials
            2013, Speaker
          </p>
        </Content>
        <Image
          src={profile}
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
