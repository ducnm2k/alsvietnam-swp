import React, {useState} from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import {DonateButton} from "../misc/Buttons";

const Header = tw.header`
   flex justify-between items-center
  max-w-screen-xl mx-auto
`;
const TwoColumn = tw.div`flex flex-col lg:flex-row    `;
const LeftColumn = tw.div` lg:w-5/12   lg:text-left`;
const RightColumn = tw.div`relative justify-between items-center
  max-w-screen-xl mx-auto md:py-0  `;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-base my-2 lg:text-base lg:ml-6 lg:my-1 self-center py-3 
  font-medium tracking-wide transition duration-300
  pb-0 border-b-2 border-transparent hover:border-green-500 hocus:text-green-500 active:text-green-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-24
  px-2 py-3 rounded bg-green-500 text-gray-100
  hocus:bg-green-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-1 py-1 lg:mx-8 rounded leading-none mt-8 xl:mt-2`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-2 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-bold rounded-sm transition duration-300 text-sm sm:text-base w-3/12 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-green-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-1`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0 `}
  input {
    ${tw`sm:pr-40 pl-2 py-10  sm:py-3 rounded-full border-2 w-full font-light focus:outline-none transition duration-100  focus:border-green-900 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-green-500 text-gray-100 font-light mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-20 sm:leading-none focus:outline-none hover:bg-green-900 transition duration-100`}
  }
`;
export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-72 mr-1`}
  }
`;
export const MobileNavLinksContainer = tw.nav`flex flex-1 `;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden   items-end 
`;
export const DesktopSearchBar = tw.nav`
  hidden lg:flex flex-auto justify-between items-center
`;
export const DesktopSearchBar1 = tw.nav`
  hidden lg:flex flex-row justify-end items-end
`;
export default ({ tabs = {
  EN: [
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

  ],
  VN: [
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

  ],
},roundedHeaderButton = false, logoLink, links, langues, className, collapseBreakpointClass = "xl" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */

  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">Home</NavLink>
      <NavLink href="/#">Understanding ALS</NavLink>
      <NavLink href="/#">Navigating ALS </NavLink>
      <NavLink href="/#">Healing Stories</NavLink>
      <NavLink href="/#">About Us</NavLink>
      <NavLink href="/#">ALS blog</NavLink>
      <NavLink href="/#">Event</NavLink>
      <NavLink href="/#">Get Involved</NavLink>

    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar,namelang } = useAnimatedNavToggler();

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/" style={{background:'white'}}>
      <img src={logo} alt="logo" />

    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;
  return (
      <Header className={className || "header-light"}>


            <DesktopSearchBar css={collapseBreakpointCss.desktopNavLinks}>
              {logoLink}
              {links}
              <searchIcon />



            </DesktopSearchBar>






      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
       {/* <select id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="VN">VN</option>
          <option selected value="FR">EN</option>
        </select>*/}
        <MobileNavLinks initial={{ x: "500%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>


      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  xs: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
    {
      imageSrc:
          "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
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
    }
  ];}
