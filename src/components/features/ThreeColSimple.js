import React, {useContext} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import {ContentWithPaddingLg, ContentWithPaddingXl} from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import Becomeasapling from "../../images/Become-a-sapling.jpg";
import Becomeaseed from "../../images/Become-a-seed.jpg";
import BecomeaseedCut from "../../images/Become-a-seed-cut.jpg";
import Becomeasprout from "../../images/Become-a-sprout.jpg";
import {Context} from "../Wrapper";
const Container = tw.div`relative lg:py-20`;

const Heading = tw(
    SectionHeading
)`text-xl md:text-3xl mt-5 px-20 font-semibold text-gray-900`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-5 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-md`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-2 bg-gray-100`}
    img {
      ${tw`lg:w-72 lg:h-72 w-56 h-56`}
    }
  }

  .title {
    ${tw`mt-4 leading-snug font-bold text-xl  text-green-700 `}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({
                  cards = [
                    {
                      imageSrc: Becomeaseed,
                      titleEN: (
                          <>
                            <div>Becoming a</div>
                            <strong>SEED</strong>
                            <div>(PLANNERS)</div>
                          </>
                      ),
                      titleVN: (
                          <>
                            <div>Trở thành</div>
                            <strong>HẠT GIỐNG</strong>
                            <div>(Xây dựng kế hoạch)</div>
                          </>
                      ),
                      url: "/get-involved",
                    },
                    {
                      imageSrc: Becomeasprout,
                      author: "Owais Khan",
                      titleEN: (
                          <>
                            <div>Becoming a</div>
                            <strong>SEEDLING</strong>
                            <div>(IMPLEMENTERS)</div>
                          </>
                      ), titleVN: (
                          <>
                            <div>Trở thành</div>
                            <strong>MẦM NON</strong>
                            <div>(Triển khai hoạt động)</div>
                          </>
                      ),
                      url: "/get-involved",
                    },
                    {
                      imageSrc: Becomeasapling,
                      author: "Steve Schoger",
                      titleEN: (
                          <>
                            <div>Becoming a</div>
                            <strong>SAPLING</strong>
                            <div>(SUPPORTERS)</div>
                          </>
                      ), titleVN: (
                          <>
                            <div>Trở thành</div>
                            <strong>CÂY NON</strong>
                            <div>(Những người ủng hộ)</div>
                          </>
                      ),
                      url: "/get-involved",
                    },
                  ],

  linkText = "Learn More",
  heading = "Get Involved",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  const context = useContext(Context);
  const language = context.locale;
  return (
    <Container>
      <ContentWithPaddingXl>
        {language === "en" ?
            <Heading>{heading}</Heading>: <Heading>Tham gia cùng chúng tôi</Heading>}

        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc}  style={{
                    borderRadius: "50%",

                  }} alt="" css={imageCss} />
                </span>
                <span className="title">
                  {language === "en" ?
                      card.titleEN: card.titleVN}</span>

              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
