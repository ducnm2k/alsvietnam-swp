import React, { useContext } from "react";
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
import { Context } from "components/Wrapper";

const Container = tw.div`relative bg-green-100 md:mx-12`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between  mx-8 py-10 md:py-2 `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw` md:mt-0`,
  tw`  md:order-first`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-left md:text-left`;

const Subheading = tw(SubheadingBase)`text-left md:text-left`;
const Heading = tw(
  SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 text-left`;
const Description = tw.p`mt-4 text-justify text-sm md:text-base font-normal leading-loose text-secondary-900`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-left rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-left md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  heading = <>Acknowledgements We want to express</>,
  descriptionEN = (
    <>
      Chúng tôi xin tri ân Healing ALS, ALS Winners, Eric is Winning, Energy
      Healing, Shackle đã hưởng ứng và cho phép chúng tôi sử dụng thông tin.
      Chúng tôi biết ơn tất cả các tổ chức và cá nhân, đội ngũ y tế, các sinh
      viên tình nguyện của VinUni, FPTU, UEF, các du học sinh, công ty Dịch
      thuật Y Khoa ASMI đã nhiệt tình góp sức để phát triển dự án và xây dựng
      trang Alsvietnam.org. Mỗi sự đóng góp, ủng hộ hay giúp đỡ của các bạn, dù
      lớn hay nhỏ, đều đã góp phần xây dựng một cuộc sống ý nghĩa và tốt đẹp
      hơn.
    </>
  ),
  descriptionVN = (
    <>
      We would like to acknowledge Healing ALS, ALS Winners, Eric is
      Winning,Energy Healing, Shackle for supporting and allowing us to use
      their information. We are grateful to all organizations and individuals,
      medical workforce, student volunteers from VinUni, FPTU, UEF, students
      studying abroad, and ASMIMedical Translation Agency, for their countless
      contributions to the construction and growth of the Alsvietnam.org
      website. Every contribution, support, and assistance, however big or
      small, has gone a long way towards building a better and more meaningful
      life.
    </>
  ),
  primaryButtonText = "MORE ABOUT US",
  primaryButtonUrl = "/about-us",
  features = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */

    
   const   dataEN = ` <h3 class="ql-align-justify">We would like to acknowledge <a href="https://healingals.org/" rel="noopener noreferrer" target="_blank">Healing ALS</a>, <a href="https://www.alswinners.com/" rel="noopener noreferrer" target="_blank">ALS Winners</a>, <a href="https://www.ericiswinning.com/" rel="noopener noreferrer" target="_blank">Eric is Winning</a>, Energy Healing, Shackle for supporting and allowing us to use their information. We are grateful to all organizations and individuals, medical workforce, student volunteers from VinUni, FPTU, UEF, students studying abroad, and <a href="https://www.facebook.com/asmi.vn/" rel="noopener noreferrer" target="_blank">ASMIMedical Translation Agency</a>,for their countless contributions to the construction and growth of the <a href="https://alsvietnam.org/" rel="noopener noreferrer" target="_blank">Alsvietnam.org </a>website.Every contribution, support, and assistance, however big or small, has gone a long way towards building a better and more meaningful life.</h3>`;
    
      
    
    
    const  dataVN= `<h3 class="ql-align-justify">Chúng tôi xin tri ân <a href="https://healingals.org/" rel="noopener noreferrer" target="_blank">Healing ALS</a>, <a href="https://www.alswinners.com/" rel="noopener noreferrer" target="_blank">ALS Winners</a>, <a href="https://www.ericiswinning.com/" rel="noopener noreferrer" target="_blank">Eric is Winning</a>, Energy Healing, Shackle đã hưởng ứng và cho phép chúng tôi sử dụng thông tin. Chúng tôi biết ơn tất cả các tổ chức và cá nhân, đội ngũ y tế, các sinh viên tình nguyện của VinUni, FPTU, UEF, các du học sinh, công ty <a href="https://www.facebook.com/asmi.vn/" rel="noopener noreferrer" target="_blank">Dịch thuật Y Khoa ASMI</a> đã nhiệt tình góp sức để phát triển dự án và xây dựng trang <a href="https://alsvietnam.org/" rel="noopener noreferrer" target="_blank">Alsvietnam.org</a>. Mỗi sự đóng góp, ủng hộ hay giúp đỡ của các bạn, dù lớn hay nhỏ, đều đã góp phần xây dựng một cuộc sống ý nghĩa và tốt đẹp hơn.</h3>`;
    

  const context = useContext(Context);
  const language = context.locale;
  return (
    <Container className="rounded-[0.5rem]  drop-shadow-xl">
      <TwoColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>
              <FormattedMessage
                id="home.Acknowledge.title"
                defaultMessage="Lời Tri Ân"
              />
            </Heading>
            <Description>
              {/* <FormattedMessage
                id="home.Acknowledge"
                defaultMessage="Chúng tôi xin tri ân Healing ALS, ALS Winners, Eric is Winning, Energy Healing, Shackle đã hưởng ứng và cho phép chúng tôi sử dụng thông tin. Chúng tôi biết ơn tất cả các tổ chức và cá nhân, đội ngũ y tế, các sinh viên tình nguyện của VinUni, FPTU, UEF, các du học sinh, công ty Dịch thuật Y Khoa ASMI đã nhiệt tình góp sức để phát triển dự án và xây dựng trang Alsvietnam.org. Mỗi sự đóng góp, ủng hộ hay giúp đỡ của các bạn, dù lớn hay nhỏ, đều đã góp phần xây dựng một cuộc sống ý nghĩa và tốt đẹp hơn."
              ></FormattedMessage> */}
           <div dangerouslySetInnerHTML={{__html: language === "en" ? dataEN : dataVN}}/>
            </Description>
            {/* <PrimaryButton as="a" href={primaryButtonUrl}>
              <FormattedMessage
                id="button.readMore"
                defaultMessage="Xem thêm"
              />
            </PrimaryButton> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
