import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/divorce-page.png";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function UncontestedDivorce() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"practice-areas landing page banner image"}
        title="PRACTICE AREAS"
        left="310px"
      />
      <Container>
        <div className="wrapper">
          <PraceticeAreaList />
          <div>
            <h2>DIVORCE - UNCONTESTED VS. CONTESTED</h2>
            <p className="text">
              While we frequently hear the term “uncontested” - there is no
              distinction in Texas law between contested cases and cases that
              are resolved through an agreement. All cases, regardless of how
              contested or amicable, are resolved through the same process of
              filing a Petition and then either requesting that the Court
              approve an agreement reached by the parties, or asking the Court
              to make a decision for the parties when an agreement cannot be
              reached.
              <br />
              <br />
              In order to start the divorce process, one party must file a
              Petition for Divorce with the court and give the other party
              notice that this has been done. In an uncontested divorce, the
              easiest way to do this is for the non-filing party to sign a
              Waiver of Service. This avoids the cost and embarrassment of
              having them served by a Process Server.
              <br />
              <br />
              Generally, you file for divorce in the county in which you
              currently reside. While there are certain exceptions, you cannot
              file for divorce in Texas unless you have been living in the state
              for 6 months and residing in the county in which you intend to
              file for at least 90 days.
              <br />
              <br />
              From there, the parties can work together to reach an agreement
              dividing their property, debts and securing agreements regarding
              their children, if they have any. Even if the parties reach an
              agreement, a divorce cannot be finalized – barring certain unusual
              circumstances – until the 61st day after the Petition for Divorce
              has been filed. This is commonly referred to as the &#34;waiting
              period&#34; as is required as a public policy to ensure parties
              are not getting divorced without a chance to &#34;cool off&#34;
              and consider the weight of the decision prior to finalizing their
              case.
              <br />
              <br />
              Even when parties are amicable or potentially have already come up
              with an agreement, it is essential to seek competent counsel to
              help with the drafting and finalization of the legal paperwork.
              Once a Final Decree has been entered it can be very costly and
              sometimes impossible to fix problems that arise later on. When the
              parties do not believe they will be able to agree on how they will
              divide their property, or about the custody and support of their
              children, it can be imperative in those cases especially to take a
              proactive and aggressive approach from the start.
              <br />
              <br />
              Often at the beginning of the case, parties have immediate issues
              that need to be dealt with such as who is going to remain in the
              home, who is going to pay what bills, or who the children are
              going to primarily reside with. These are all issues that can be
              dealt with through a Temporary Orders Hearing. This is a hearing,
              which typically occurs within the first 14 to 30 days of a case
              being filed. A Temporary Orders Hearing can be very contentious
              and can set the entire framework for how your case will unfold as
              these orders will often be in place until an agreement is reached
              or a Final Trial occurs, which can be 9 months to a year
              (sometimes much longer due to the Court&#39;s pandemic backlog)
              after filing. It is imperative to retain a proactive and
              aggressive lawyer as early on in your case as possible to fight
              for you and obtain the most favorable orders regarding your
              children and property.
              <br />
              <br />
              While appearing in court for your divorce can be extremely
              stressful and costly, at Dally & Webb, PLLC, we realize that
              sometimes a hearing or trial is inevitable. We will do our best to
              guide you through this difficult process and be an effective and
              zealous advocate for you and your family both in and out of the
              courtroom.
            </p>
          </div>
        </div>
        <WhyChooseUs />
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
    padding: 6rem;
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    width: fit-content;
    margin-bottom: 2rem;
    letter-spacing: 4px;
    border-bottom: 1px solid #67318d;
    padding-bottom: 1.6rem;
  }

  .text {
    font-size: 17px;
    max-width: 760px;
    letter-spacing: 1px;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      align-items: center;
      padding: 3rem 2rem 5rem;
    }
  }
`;
