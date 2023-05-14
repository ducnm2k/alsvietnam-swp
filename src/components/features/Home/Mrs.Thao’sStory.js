import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import ThaoStory from "../../../images/Thao.png";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  PrimaryButton as PrimaryButtonBase,
  PrimaryButton1,
} from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as QuotesLeftIcon } from "../../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../../images/quotes-r.svg";
import { Context } from "components/Wrapper";

const Container = tw.div`relative  md:mx-16 `;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between py-20 md:py-24 `;
const Column = tw.div`w-full  md:mx-0`;
const ImageColumn = tw(
  Column
)`lg:w-1/3 xl:w-1/5 flex-shrink-0 xl:mx-8  mx-4 xl:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`lg:w-2/3 xl:w-4/5 mt-16 md:mt-8`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:px-16 md:order-last`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat border  border-green-500 bg-center h-full`,
]);
const TextContent = tw.div`lg:py-0 text-left md:text-left`;
const QuoteContainer = tw.div`relative p-6 md:p-4 lg:p-5 mt-4 md:mt-0`;
const QuotesLeft = tw(
  QuotesLeftIcon
)`w-5 h-5 lg:w-6 lg:h-6 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-5 h-5 lg:w-6 lg:h-6 text-primary-500 absolute bottom-0 right-0`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 lg:text-left md:text-center`;
const Description = tw.p`mt-2 text-justify md:text-base text-sm font-normal leading-loose text-secondary-900`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-left rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`lg:mx-4 mt-6  text-sm inline-block mx-auto border-2 border-green-500 md:mx-0`;

export default ({
  subheading = "Our Expertise",
  heading = <>Thao’s story with hope</>,
  headingEN="Thao's story with hope",
  headingVN="Câu chuyện của Thảo - Người sáng lập ALS",
  descriptionEN = "Being treated within my homeland isn’t not only economically efficient but also raising the living standards of our community and erupted our inner patriotism. \n",
  descriptionVN = 'Được chữa trị trên quê hương mình không những hiệu quả về mặt kinh tế, mà còn nâng cao chất lượng sống của cộng đồng và cả niềm kiêu hãnh dân tộc.',
  primaryButtonTextEN = "Read more",
  primaryButtonTextVN = "Xem thêm",
  primaryButtonUrlVN = "https://storage.googleapis.com/alsvietnam.appspot.com/general/a87653a5-86c8-4b3d-af03-8ca333fd1d7d.pdf",
  primaryButtonUrlEN = "https://storage.googleapis.com/alsvietnam.appspot.com/general/10496d6f-01d3-4331-ad2f-a39aaa497c82.pdf",
  features = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Professionalism",
      description:
        "We have the best professional marketing people across the globe just to work with you.",
    },
    {
      Icon: MoneyIcon,
      title: "Affordable",
      description:
        "We promise to offer you the best rate we can - at par with the industry standard.",
    },
  ];

  if (!features) features = defaultFeatures;
  const context = useContext(Context);
  const language = context.locale;
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            style={{
              borderRadius: "50%",
              height: "18rem",
              width: "17rem",
              borderColor: "rgb(255,255,255)",
              borderWidth: "0.1rem",
            }}
            imageSrc={ThaoStory}
          />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{language === 'en' ? headingEN : headingVN}</Heading>
            <QuoteContainer>
              <QuotesLeft />
              <Description>{language === 'en' ? descriptionEN : descriptionVN}</Description>
              <QuotesRight />
            </QuoteContainer>
            <PrimaryButton
              as="a"
              href={`/healing_stories/bb19e30b-9145-42dc-9b6e-5fb906743ed1/thao-story`}
            >
              {language === 'en'? primaryButtonTextEN : primaryButtonTextVN}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
