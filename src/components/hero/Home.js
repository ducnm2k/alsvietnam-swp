import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Carousel } from '@sefailyasoz/react-carousel'
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import {SectionHeading, Subheading as SubheadingBase} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import searchIcon from "../../images/icons8-search.svg";

import {DonateButton, PrimaryButton, PrimaryButton as PrimaryButtonBase} from "components/misc/Buttons.js";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import donate from "../../images/heart.png";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg"
import headerbar from "../../images/headerbar.jpg";
import headerbar1 from "../../images/headerbar1.JPG";
import headerbar2 from "../../images/headerbar2.jpg";
import Slider from "react-slick";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import {motion} from "framer-motion";
 const Container = tw.div`relative  `;
const Header = tw(HeaderBase)`max-w-none flex flex-col xl:flex-row`;
const HeaderRow = tw.div`flex justify-between items-end flex-col xl:flex-row`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-10`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TestimonialImageSlider = tw(Slider)`w-full  flex-shrink-0 `;

const Componentsearchfield = tw.a`mt-4  sm:mt-0 text-primary-500 hocus:text-primary-900 transition duration-300 font-semibold flex items-end`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`
]);
const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const MetaContainer =  styled.div`
  ${tw.div`flex items-center flex-row`} svg {
  ${tw`w-5 h-5  `}
  }

` ;
const ControlButton1 =styled(PrimaryButton)`
  ${tw`text-red-500  px-8 py-3   border border-pink-700 text-xl font-bold  bg-white text-red-500  text-xl hocus:bg-red-700 hocus:text-white focus:shadow-outline flex items-center justify-center  last:mr-0`}
  img {
    ${tw`w-8 h-8 mr-2`}
  }
`;
const SearchButton = styled.div`
  ${tw`text-pink-500  px-3 py-3 font-bold text-xl  font-bold rounded bg-white text-pink-500  text-xl hocus:bg-gray-200 hocus:text-white focus:shadow-outline flex items-center leading-none mr-6 last:mr-0`}
  img {
    ${tw`w-6 h-6 mr-1`}
  }
`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-bold rounded-sm transition duration-300 text-sm sm:text-base w-5/12 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:ml-12!`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;
const TextContainer = styled.div(props => [
    tw`flex flex-col w-full lg:w-7/12`,
    props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

export default ({
                    tabs = {
                        Starters: [
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Veg Mixer",
                                content: "Tomato Salad & Carrot",
                                price: "$5.99",
                                rating: "5.0",
                                reviews: "87",
                                url: "#"
                            },
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Macaroni",
                                content: "Cheese Pizza",
                                price: "$2.99",
                                rating: "4.8",
                                reviews: "32",
                                url: "#"
                            },
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Nelli",
                                content: "Hamburger & Fries",
                                price: "$7.99",
                                rating: "4.9",
                                reviews: "89",
                                url: "#"
                            },
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Jalapeno Poppers",
                                content: "Crispy Soyabeans",
                                price: "$8.99",
                                rating: "4.6",
                                reviews: "12",
                                url: "#"
                            },
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Cajun Chicken",
                                content: "Roasted Chicken & Egg",
                                price: "$7.99",
                                rating: "4.2",
                                reviews: "19",
                                url: "#"
                            },
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Chillie Cake",
                                content: "Deepfried Chicken",
                                price: "$2.99",
                                rating: "5.0",
                                reviews: "61",
                                url: "#"
                            },
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Guacamole Mex",
                                content: "Mexican Chilli",
                                price: "$3.99",
                                rating: "4.2",
                                reviews: "95",
                                url: "#"
                            },
                            {
                                imageSrc:
                                    "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                                title: "Carnet Nachos",
                                content: "Chilli Crispy Nachos",
                                price: "$3.99",
                                rating: "3.9",
                                reviews: "26",
                                url: "#"
                            }
                        ],


                    },
                    buttonRounded = true,
                    testimonials = null,
                }) => {
    /*
     * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
     * You can add or remove objects from the array as you need.
     */
    const tabsKeys = Object.keys(tabs);
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);

    const defaultTestimonials = [
        {
            imageSrc:
            headerbar,
            profileImageSrc:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Charlotte Hale",
            customerTitle: "CEO, Delos Inc."
        },
        {
            imageSrc:
            headerbar1,
            profileImageSrc:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            quote:
                "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
        },
        {
            imageSrc:
            headerbar2,
            profileImageSrc:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            quote:
                "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
        }
    ];

    if (!testimonials || testimonials.length === 0) testimonials = defaultTestimonials;

    // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
    const [imageSliderRef, setImageSliderRef] = useState(null);
    const [textSliderRef, setTextSliderRef] = useState(null);
    const buttonRoundedCss = buttonRounded && tw`rounded-full`;

    const navLinks = [

        <NavLinks key={1} style={{width:'100%',fontFamily: "Gotham", display:'flex', justifyContent:'center', paddingTop:'5rem'}}>
            <NavLink className="border-green-500 text-green-500" href="/#">Home </NavLink>
            <NavLink href="/#">Understanding ALS</NavLink>
            <NavLink href="/#">Navigating ALS </NavLink>
            <NavLink href="/#">Healing Stories</NavLink>
            <NavLink href="/#">ALS blog</NavLink>
            <NavLink href="/#">About Us</NavLink>
            <NavLink href="/#">Get Involved</NavLink>
        </NavLinks>,
        <NavLinks key={2} style={{paddingTop:'5.5rem', marginRight:'5px'}}>
            <select id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base my-2 lg:text-xl lg:mx-5 lg:my-2 self-center py-3
  font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="VN">Tiếng Việt</option>
                <option selected value="FR">English</option>
            </select>
        </NavLinks>,

        <NavLinks key={3} style={{paddingTop:'3rem'}}>
            <MetaContainer>

                <ControlButton1  href="/#">
                    <img src={donate} />Donate

                </ControlButton1>
            </MetaContainer>
        </NavLinks>


    ];
    const searchfield = [

        <NavLinks key={2}>
            <input type="text" placeholder="Your E-mail Address" />
            <PrimaryLink css={buttonRoundedCss} href="/#">
                Sign Up
            </PrimaryLink>
        </NavLinks>

    ];
    return (
        <>
            <Container>

                {/*  <Componentsearchfield>
        <Actions>
          <input type="text" placeholder="Your E-mail Address" />
          <button>Get Started</button>
        </Actions>
      </Componentsearchfield>*/}
                {/*<TabsControl>
          {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
          ))}
        </TabsControl>*/}

                <Header links={navLinks} />


            </Container>

        </>

    );

};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
    <div {...props}>
        {subheading ? <Subheading>{subheading}</Subheading> : null}
        <HeadingTitle>{heading}</HeadingTitle>
        <Description>{description}</Description>
    </div>
);

