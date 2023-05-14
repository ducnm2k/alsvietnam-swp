import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

import HeadNav from "../components/hero/HeadNav";
import FootNav from "../components/footers/FootNav";
import TitleNav from "../components/hero/TitleNav";
import {SectionHeading} from "../components/misc/Headings";

const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;
const Subheading = tw(SectionHeading)`text-2xl lg:text-4xl font-bold text-gray-900`;
const Heading = tw(
    SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 text-left mt-8 md:mt-0`;
export default () => {
  return (
      <body className="font-[Gotham]">
      <Container>
      <HeadNav activePage="AboutUs" />
          <TitleNav pageTitleString="About Us" />
      <MainFeature1
        subheading={<Subheading>What We Do</Subheading>}
        heading="We are a modern design agency."
        buttonRounded={false}
        primaryButtonText="Read more"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision, Mission & Value</Subheading>}
        heading="We aim to disrupt the design space."
        description="We wish that we can change fear and hopelessness into hope and positivity for the  people who are impacted by ALS and other neurodegenerative diseases. "
        buttonRounded={false}
        primaryButtonText="Read more"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
          <MainFeature1
              subheading={<Subheading>Code of Conduct</Subheading>}
              heading="We are a modern design agency."
              buttonRounded={false}
              primaryButtonText="Read more"
              description="ALS Vietnam is a non – profit organization performing media efforts about ALS through various social media platforms. ALS Vietnam connects and learns from ALS Winners, experts and a variety of different research sources all around the world to enhance community’s knowledge, brings useful information and hope for patients during their healing journey."
              imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          />
      <TeamCardGrid
        subheading={<Subheading>Team Members</Subheading>}
      />
      </Container>
      <FootNav />
      </body>
  );
};
