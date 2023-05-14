import React, { useContext } from "react";
import tw from "twin.macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingLg,
} from "components/misc/Layouts";
import styled from "styled-components";
import banner from "../../images/home_banner.jpg";
import { PrimaryButton } from "../misc/Buttons";
import { Context } from "../Wrapper";

const Container = styled.div`
  ${tw` bg-cover text-gray-100`} background-image: url("${banner}");
`;
const HeadingContainer = tw.div`text-center`;
const Heading = tw(SectionHeading)`text-2xl lg:text-4xl font-semibold `;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const PrimaryButton1 = tw(
  PrimaryButton
)`mt-8 md:mt-10 text-base inline-block mx-auto border-2 border-green-500 md:mx-0`;

export default ({
  subheading = "",
  headingEN = <span className="text-white">Are you a patient or family ?</span>,
  headingVN = (
    <span className="text-white">Bạn là bệnh nhân hay người thân?</span>
  ),
  primaryButtonText = "Checklist for PALS",
  primaryButtonUrl = "/navigating_ALS/f85441c4-8303-4716-b526-b6a06d14f37a",
}) => {
  const context = useContext(Context);
  const language = context.locale;
  return (
    <Container className="md:mx-20">
      <div
        className="backdrop-opacity-10 backdrop-invert bg-white/10"
        style={{
          borderRadius: "10px",
          textAlign: "center",
          marginTop: "8rem",
          textShadow: "-10px -1px -1px -1px black",
        }}
      >
        <br />
        <br />
        <ContentWithPaddingLg className="rounded-[1rem] drop-box-shadow-xl">
          <HeadingContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            {language === "en" ? (
              <Heading>{headingEN}</Heading>
            ) : (
              <Heading>{headingVN}</Heading>
            )}

            <PrimaryButton1 as="a" href={primaryButtonUrl}>
            <a href="/navigating/checklist" className="text-white">{language === "en" ? "Checklist" : "Bảng kiểm"}</a>
            </PrimaryButton1>
          </HeadingContainer>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ContentWithPaddingLg>{" "}
      </div>
    </Container>
  );
};
