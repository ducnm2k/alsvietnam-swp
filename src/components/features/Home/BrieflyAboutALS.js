import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
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
import brieflyAboutALS from "../../../images/What-is-ALS.jpg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { FormattedMessage } from "react-intl";
const Container = tw.div`relative md:mx-20 `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between mx-auto py-16 md:py-20 `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)` md:w-1/3 flex-shrink-0 h-80  md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`xl:w-2/3 md:mt-4 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:order-last`
    : tw`md:ml-4 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat  bg-center h-full`,
]);
const TextContent = tw.div`lg:py-4 text-left `;

const Subheading = tw(SubheadingBase)`text-left md:text-left`;
const Heading = tw(
  SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 text-left mt-8 md:mt-0`;
const Description = tw.p`mt-4 text-justify text-sm md:text-base font-normal leading-loose text-secondary-900`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-center`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-2 text-sm inline-block mx-auto md:mx-0  `;

export default ({
  subheading = "Our Expertise",
  heading = <>Briefly about ALS</>,
  description = "Amyotrophic lateral sclerosis (ALS) is a progressive neurodegenerative disease that damages the brain and spinal cord nerve cells responsible for controlling voluntary muscles leading to muscular dystrophy and gradual weakening. In the early stages, the most common symptoms for ALS correlate with various muscle malfunction, such as stiff muscles and muscle twitching. While ALS progression might be variable from one person to another, treatment can extend patients’ life, along with better living conditions.\n",
  primaryButtonText = "READ MORE",
  primaryButtonUrl = "/understanding_ALS/ae9c363a-c164-4629-ba84-986f06513cc3/what-is-als",
  features = null,
  textOnLeft = false,
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

  return (
    <Container>
      <TwoColumn>
        <TextContent>
          <Heading>
            <FormattedMessage
              id="home.BrieflyAboutALS.title"
              defaultMessage="Sơ lược về bệnh ALS"
            />
          </Heading>
          <Description>
            <FormattedMessage
              id="home.BrieflyAboutALS"
              defaultMessage="Bệnh ALS - Xơ cứng cột bên teo cơ là một bệnh thoái hóa thần kinh tiến triển làm tổn thương các tế bào thần kinh trong não và tủy sống chịu trách nhiệm kiểm soát các cơ chủ động, dẫn đến teo cơ và yếu dần. Trong giai đoạn đầu, các triệu chứng phổ biến nhất của ALS liên quan đến các sự cố cơ khác nhau, chẳng hạn như cứng cơ và co giật cơ. Mặc dù sự tiến triển của ALS có thể khác nhau ở mỗi người, nhưng việc điều trị có thể kéo dài tuổi thọ của bệnh nhân, đi cùng là điều kiện sống tốt hơn."
            />
          </Description>

          <PrimaryButton as="a" href={primaryButtonUrl}>
            <FormattedMessage id="button.readMore" defaultMessage="Xem thêm" />
          </PrimaryButton>
        </TextContent>
      </TwoColumn>
    </Container>
  );
};
