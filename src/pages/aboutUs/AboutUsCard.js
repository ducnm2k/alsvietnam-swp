import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container =  tw.div`md:mx-20`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between  mx-auto md:py-0 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
    tw``,
    props.textOnLeft ? tw` md:order-first` : tw`md:ml-12 lg:ml-8 md:order-last`
]);

const Image = styled.img(props => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`,
]);


const TextContent = tw.div`pt-10 text-left `;

const Subheading = tw.p`text-left relative inline-block`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center  leading-tight`;
const Description = tw.p`pt-3 text-left text-base   font-normal leading-loose text-justify `;
const Text = styled.div`
  ${tw`text-lg  `}
  p {
    ${tw` leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold `}
  }
  h2 {
    ${tw`text-2xl font-bold `}
  }
  h3 {
    ${tw`text-xl font-bold  text-primary-600`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`pl-4 ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
const PrimaryButton = styled(PrimaryButtonBase)(props => [
    tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
    props.buttonRounded && tw`rounded-full`
]);


export default ({
                    subheading = "Our Expertise",

                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    primaryButtonText = "Learn More",
                    primaryButtonUrl = "https://timerse.com",
                    imageSrc = TeamIllustrationSrc,
                    buttonRounded = true,
                    imageRounded = true,
                    imageBorder = false,
                    imageShadow = false,
                    imageCss = null,
                    imageDecoratorBlob = false,
                    imageDecoratorBlobCss = null,
                    textOnLeft = true
                }) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

    return (
        <Container >
            <TwoColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>{subheading}</Subheading>
                        <Description>{description}</Description>
                       {/* <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
                            {primaryButtonText}
                        </PrimaryButton>*/}
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
