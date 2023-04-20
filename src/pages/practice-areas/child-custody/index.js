import styled from "styled-components";
import Link from "next/link";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../../public/images/child-banner.png";
import PraceticeAreaList from "@/components/practice-area-list/practiceAreaList";

export default function ChildCustody() {
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
            <p className="body-copy-bold">CHILD CUSTODY</p>
            <p className="body-copy">
              While most people use the terms “full custody” or “sole custody,”
              those are not actual legal terms in Texas. There is a presumption
              that all separated parents shall be named Joint Managing
              Conservators which means they share equal rights and duties to
              their children.
              <br />
              <br />
              Within that umbrella title, generally one parent will have the
              exclusive right to determine the child’s primary residence (we
              refer to this parent as the “Primary Parent”). The child will live
              primarily with this parent and attend school based upon this
              parent’s residence. The court will typically limit the area where
              the child can live which is referred to as a Geographic
              Restriction. Once a geographic restriction is put into place, they
              can be very difficult to modify in the future.
              <br />
              <br />
              The other, non-primary parent, will generally have a Standard
              Possession Schedule with the child, pay child support, and provide
              monthly health insurance for the child.
              <br />
              <br />
              While there are some standard guidelines in place, not all
              families are the same, and there are ways to come to agreements or
              have the court make orders that either increase the amount of time
              a parent has with the children or lessen the amount of time, based
              on varying circumstances.
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
