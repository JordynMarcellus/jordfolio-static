import React, { Fragment } from "react";
import { withSiteData, Head } from "react-static";
import styled from "@emotion/styled";
import { BlogPostMeta } from "../components/Meta";
import Header from "../components/Header";

const Main = styled("section")`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  @media (min-width: 45rem) {
    width: 70vw;
    margin: 0 auto;
    padding: 0 2rem 2rem;
  }
`;

const HEADLINE = "Jordyn Marcellus";
const SUBHEAD = "Let's build the future of the web together.";

export default withSiteData(() => (
  <Fragment>
    <BlogPostMeta headline={HEADLINE} excerpt={SUBHEAD} slugline="" />
    <Head>
      <title>{`${HEADLINE} - ${SUBHEAD.toLowerCase()}`}</title>
    </Head>
    <Header headline={HEADLINE} subhead={SUBHEAD} />
    <Main>
      <p>
        I'm a full-stack JavaScript developer trying to build a better, more
        inclusive web.
      </p>
      <p>
        Over the course of my career, I've developed interactive ads, SaaS
        platforms and scalable, reliable APIs.
      </p>
      <p>
        My passion is building bold, ambitious web applications and delightful
        interactive user experiences by delivering high-quality software to
        customers constantly. I love building great products collaboratively,
        coaching
      </p>
      <p>
        I'm an agilist at heart, passionate about the craft of software
        development and lean iterative development. I'm obsessed with finding
        big value in small, daily increments.
      </p>
    </Main>
  </Fragment>
));
