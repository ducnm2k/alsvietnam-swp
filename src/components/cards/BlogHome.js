import React, {useContext, useState} from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import {PrimaryButton as PrimaryButtonBase, PrimaryButton2 as PrimaryButtonBase1} from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.jpg";
import {Context} from "../Wrapper";
import {FormattedMessage} from "react-intl";

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

const CardSlider = tw.div`flex justify-between mt-0 flex-col  items-center lg:items-stretch lg:flex-row flex-wrap relative`;
const Card = tw.div`h-full flex! flex-col sm:border mt-16 max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-4 `;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-lg font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;


const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;



const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
    PrimaryButtonBase
  )`mt-auto text-base  w-full rounded  py-3 sm:py-3 text-center`;
export default () => {
    // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
   
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    /* Change this according to your needs */
    const cards = [
        {
            imageSrc: blog1,
            titleEN: (<>10 Things the Processed Food Industry Doesn’t Want You to Know</>),
            titleVN: (<>10 Điều ngành công nghiệp thực phẩm không muốn bạn biết</>),
            url: "https://alsvietnam.org/als-blog/things-the-processed-food-industry-doesn-t-want-you-to-know",

        },
        {
            imageSrc: blog2,
            titleEN: (<>The Many Health Benefits of Avocado<br/></>),
            titleVN: (<>Lợi ích sức khỏe tuyệt vời từ quả bơ<br/></>),
            url: "https://alsvietnam.org/als-blog/the-many-health-benefits-of-avocado",

        },
        {
            imageSrc: blog3,
            titleEN: "What Are the Health Benefits of Coconut Oil?",
            titleVN: "Dầu dừa có lợi ích gì cho sức khỏe?",
            url: "https://alsvietnam.org/als-blog/what-are-the-health-benefits-of-coconut-oil",

        },
    ]
    const context = useContext(Context);
    const language = context.locale;
    return (
        <Container>
            <Content>
                <HeadingWithControl>
                    <Heading><FormattedMessage id="headNav.ALS-blog" /></Heading>
                    <Controls>
                        <NextButton className="drop-shadow-xl">
                      <a href="https://alsvietnam.org/als-blog" className="text-white">{language === "en" ?" BROWSE ALL POSTS":"XEM TẤT CẢ BÀI VIẾT"}</a>
                        <ChevronRightIcon/></NextButton>
                  
                    </Controls>
                </HeadingWithControl>
                <CardSlider >
                    {cards.map((card, index) => (
                        <Card key={index} className="drop-shadow-xl">
                            <CardImage imageSrc={card.imageSrc} />
                            <TextInfo>
                                <TitleReviewContainer>
                                    {language === "en" ?<Title>{card.titleEN}</Title>:<Title>{card.titleVN}</Title>}
                                </TitleReviewContainer>


                            </TextInfo>
                            <PrimaryButton as="a" href={card.url}>{language === "en" ?"Read more":"Xem thêm"}</PrimaryButton>
                        </Card>
                    ))}
                </CardSlider>
            </Content>
        </Container>
    );
};
