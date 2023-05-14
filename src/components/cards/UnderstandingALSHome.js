import React, { useContext, useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { PrimaryButton2 as PrimaryButtonBase1 } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import understandingals1 from "../../images/understandingals1.png";
import understandingals2 from "../../images/understandingals2.jpg";
import understandingals3 from "../../images/understandingals3.jpg";
import understandingals4 from "../../images/understandingals4.png";
import { Context } from "../Wrapper";
import { FormattedMessage } from "react-intl";
const Container = tw.div`relative md:mx-20`;
const Content = tw.div`max-w-screen-2xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(
  SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 text-left`;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase1)`
  ${tw`mt-4 sm:mt-0 first:ml-0 text-xl ml-4 rounded-full p-2 px-8 py-3 mr-2 flex items-center `}
  svg {
    ${tw`w-6 h-6 mr-2`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)`text-sm`;

const CardSlider = tw.div`flex justify-between mt-0 flex-col xl:flex-row items-center xl:items-stretch relative`;

const Card = tw.div`h-full flex! flex-col mt-16 sm:border max-w-xs sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-4 `;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-lg font-bold`;

const Description = tw.p`md:text-base text-sm leading-loose mt-2 sm:mt-4`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto text-base w-full rounded py-3 sm:py-3 text-center`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(
    "https://alsvietnam.org/understanding_ALS/a4cf6eb3-f002-48a7-b613-6ca4641750b8"
  );
  const context = useContext(Context);
  const language = context.locale;
  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: understandingals1,
      titleEN: "Dental Almalgam",
      titleVN: "Răng trám bạc",

      descriptionEN:
        "Learn about the effects of tooth fillings and how to remove them",
      descriptionVN: "Tìm hiểu về tác hại của trám răng và cách loại bỏ",
      url: "understanding_ALS/a4cf6eb3-f002-48a7-b613-6ca4641750b8/dental-amalgam-and-its-effects-on-patient-s-health",
    },
    {
      imageSrc: understandingals2,
      titleEN: "Epstein Barr Virus",
      titleVN: "Vi rút Epstein-Barr",
      descriptionEN: "EBV can hijack your immune system.",
      descriptionVN: "EBV có thể tấn công hệ thống miễn dịch của bạn.",
      url: "/understanding_ALS/a4cf6eb3-f002-48a7-b613-6ca4641750b8/primary-epstein-barr-virus-infection-with-neurological-complications",
    },
    {
      imageSrc: understandingals3,
      titleEN: "Lyme Disease",
      descriptionEN:
        "Did you know that a tick bite can cause several chronic conditions?",
      titleVN: "Bệnh Lyme",
      descriptionVN:
        "Bạn có biết vết cắn của ve có thể gây ra tình trạng mãn tính không?",
      url: "/understanding_ALS/a4cf6eb3-f002-48a7-b613-6ca4641750b8/lyme-disease",
    },
    {
      imageSrc: understandingals4,
      titleEN: "Liver Disease",
      titleVN: "Bệnh Gan",
      descriptionVN: "Chức năng gan có thể liên quan đến sự tiến triển của ALS",

      descriptionEN: "Liver function may be involved in the progress of ALS",
      url: "understanding_ALS/a4cf6eb3-f002-48a7-b613-6ca4641750b8/when-a-diseased-liver-disrupts-the-brain",
    },
  ];

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>
           {language === "en" ? "Understanding ALS" : "Các yếu tố nguy cơ"}
          </Heading>
          <Controls>
            <NextButton
              onClick={sliderRef?.slickNext}
              className="drop-shadow-xl"
            >
              <a href="https://alsvietnam.org/understanding_ALS/a4cf6eb3-f002-48a7-b613-6ca4641750b8" className="text-white">
                {language === "en"
                  ? " BROWSE ALL POSTS"
                  : "XEM TẤT CẢ BÀI VIẾT"}
              </a>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  {language === "en" ? (
                    <Title>{card.titleEN}</Title>
                  ) : (
                    <Title>{card.titleVN}</Title>
                  )}
                </TitleReviewContainer>

                {language === "en" ? (
                  <Description>{card.descriptionEN}</Description>
                ) : (
                  <Description>{card.descriptionVN}</Description>
                )}
              </TextInfo>
              <PrimaryButton as="a" href={card.url}>
                {language === "en" ? "Read more" : "Xem thêm"}
              </PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
