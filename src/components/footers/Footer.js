import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo1.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`  px-40 lg:py-10 flex flex-wrap justify-start`;

const Column = tw.div`md:w-1/4`;
const WideColumn = tw(
  Column
)`text-center md:text-left w-full md:w-1/4 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-lg font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-green-500 hocus:border-green-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;
const LogoText = tw.h5`ml-2 text-xl font-black text-green-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-xl mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const SubscribeNewsletterColumn = tw.div`text-center lg:text-left mt-40 lg:mt-0  `;
const SubscribeNewsletterContainer = tw.div`max-w-sm  lg:mx-5 `;
const SubscribeText = tw.p`mt-2  text-base text-gray-800`;
export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CompanyDescription style={{fontFamily:'Gotham'}}>
            HCM, Vietnam <br/>Email: alsvietnam@org
          </CompanyDescription>
        </WideColumn>
        <Column style={{fontFamily:'Gotham'}}>
          <ColumnHeading style={{fontFamily:'Gotham',fontSize:'20px'}}>Quick Links</ColumnHeading>
          <LinkList style={{fontFamily:'Gotham',fontWeight: "400"}}>
            <LinkListItem>
              <Link href="#">Briefly about ALS</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Vision - Mission - Values</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Team Members</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Code of Conduct</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Guidelines for Media</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Financial Information</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Contact Us</Link>
            </LinkListItem>
          </LinkList>
        </Column>{" "}
        <SubscribeNewsletterColumn>
          <SubscribeNewsletterContainer >
            <ColumnHeading style={{fontFamily:'Gotham',fontSize:'20px'}}>Disclaimer</ColumnHeading>
            <SubscribeText style={{fontFamily:'Gotham', width:'40rem'}}>
              Our greatest wish is to enhance the community's knowledge as well
              as help ALS and other neurodegenerative patients have more useful
              information, hope and optimism on their healing journey. We make
              an effort to provide objective and accurate information to help
              them lead a better life. We connect and learn from ALS winners and
              experts while also reviewing relevant research findings around the
              world to provide ALS patients and their families with evidence of
              ALS reversal or deceleration. In addition, we encourage readers to
              find new solutions and ideas from different learning resources and
              to be open-minded towards the possible solutions for an effective
              curing process. However, we have no authority to diagnose or treat
              this disease. Therefore, patients and their family members should
              consult medical experts before carrying out a new treatment
              method.
            </SubscribeText>
          </SubscribeNewsletterContainer>
        </SubscribeNewsletterColumn>
      </FiveColumns>
    </Container>
  );
};
