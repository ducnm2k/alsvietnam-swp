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
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { FormattedMessage } from "react-intl";

const Container = tw.div`relative bg-green-100 md:mx-12`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between  mx-8 py-10 md:py-2 `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw` md:mt-0`,
  tw`  md:order-first`,
]);

const TextContent = tw.div`lg:py-4 text-left `;

const Subheading = tw(SubheadingBase)`text-center md:text-center`;
const Heading = tw(
  SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 text-left`;
const Description = tw.p`mt-4 text-justify text-sm md:text-base font-normal leading-loose text-secondary-900`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  heading = <>Mission</>,
  description = "We raise public awareness and bring hope to patients suffering from ALS and other neurodegenerative diseases in Vietnam. We not only constantly learn from experts and ALS Winners who beat ALS disease but also collate a great deal of ALS-related research worldwide to provide ALS patients and their relatives with proof that ALS symptoms can be reversed or minimized with the right solutions.",
  primaryButtonText = "ABOUT US",
  primaryButtonUrl = "/about-us",
  features = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */

  return (
    <Container className="rounded-[0.5rem] drop-shadow-xl">
      <TwoColumn>
        <TextContent>
          <Heading>
            <FormattedMessage
              id="home.Mission.title"
              defaultMessage="Sứ mệnh"
            />
          </Heading>
          <Description>
            <FormattedMessage
              id="home.Mission"
              defaultMessage="Chúng tôi nâng cao nhận thức của cộng đồng và mang hy vọng cho những người bị ảnh hưởng bởi ALS cũng như người có các bệnh lý thoái hóa thần kinh khác ở Việt Nam. Chúng tôi kết nối và không ngừng học hỏi từ những người chiến thắng ALS, giới chuyên gia và đối chiếu các nghiên cứu liên quan trên khắp thế giới để cung cấp cho bệnh nhân ALS cũng như người thân của họ những bằng chứng rằng các triệu chứng ALS có thể được đảo ngược hoặc làm chậm sự tiến triển của nó ở mức tối thiểu khi sử dụng các giải pháp đúng đắn."
            ></FormattedMessage>
          </Description>
          <PrimaryButton as="a" href={primaryButtonUrl}>
            <FormattedMessage id="button.readMore" defaultMessage="Xem thêm" />
          </PrimaryButton>
        </TextContent>
      </TwoColumn>
    </Container>
  );
};
