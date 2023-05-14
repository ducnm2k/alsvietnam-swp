import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {
  Container as ContainerBase,
  Container,
  Content2Xl,
} from "components/misc/Layouts";


import success from "images/NicePng_success-image-png_3624869.png";
import HeadNav from "components/hero/HeadNav";


import { FormattedMessage } from "react-intl";
import numeral from "numeral";


/* Hero */
const Container1 = tw(
  ContainerBase
)`min-h-screen  text-white font-medium flex justify-center -m-8`;

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(
  Row
)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:order-first`
    : tw`md:ml-8 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);

const TextContent = tw.div`lg:py-8`;
const Content = tw.div`max-w-screen-xl  md:mx-40 justify-center m-0 sm:mx-40 sm:my-16 bg-gray-100 text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const LogoLink = tw.a`flex justify-center items-center font-black border-b-0 text-2xl! ml-0!`;
const MainContainer = tw.div`lg:w-3/5 xl:w-1/2 p-6 sm:p-12 text-center justify-center`;

const LogoImage = tw.img`w-32 mr-1`;
const MainContent = tw.div`mt-12 flex flex-col justify-center `;
const Headingsuccess = tw.h1`text-2xl xl:text-3xl font-semibold  justify-center text-green-500`;
const HeadingFail = tw.h1`text-2xl xl:text-3xl font-semibold  justify-center text-red-600`;
const Name = tw.h2`text-center text-2xl xl:text-3xl font-medium leading-relaxed  mt-4`;
const Description = tw.h5`text-center  text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-300 mt-4`;

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`;
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`;
const Value = tw.div`font-bold text-primary-500`;
const Key = tw.div`font-medium text-gray-700`;
function SuccessDonation(props) {
    const amount = window.localStorage.getItem('amount')
    return (
        <div className="font-[Montserrat]">
        <Container tw="-mx-8 -mt-8 pt-8 px-8 ">
          <Content2Xl>
            <div className="md:px-8">
              <HeadNav />
            </div>
            <Content>
         
                <MainContainer>
                  <MainContent>
                    <Headingsuccess>
                      <FormattedMessage id="noti.success1" />
                    </Headingsuccess>
                    <LogoLink>
                      <LogoImage src={success} />
                    </LogoLink>
  
                    <Name>  {numeral(Number(amount/100)).format()} VNĐ  </Name>
                    <Description>
                      {" "}
                      <FormattedMessage id="noti.success2" />
                    </Description>
                  </MainContent>
                </MainContainer>
              
            </Content>
  
      
          </Content2Xl>
        </Container>
      </div>
    );
}

export default SuccessDonation;