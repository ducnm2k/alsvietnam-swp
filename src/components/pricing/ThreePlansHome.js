import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import { Context } from "components/Wrapper";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;
const Content = tw.div`max-w-screen-2xl mx-auto `;
const PlansContainer = tw.div`flex mt-auto justify-between flex-col xl:flex-row items-center xl:items-stretch relative`;
const Plan = styled.div`
  ${tw` md:w-1/3 lg:mr-6 lg:last:mr-5 text-left px-8 mb-4 rounded-lg shadow relative pt-2  text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-auto h-2`}
  }

  ${(props) =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
background: rgb(85,60,154);
background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
background: rgb(76,81,191);
background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-lg  my-1 hover:border-green-500 hocus:text-green-700`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium text-base md:text-base lg:text-2xl `}
    &:not(.mainFeature) {
      ${tw`text-green-500  text-base hover:border-green-500 text-green-500 hocus:text-green-700 `}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide `}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

export default ({
  subheading = "Pricing",
  heading = "Flexible Plans.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  plans = null,
  primaryButtonText = "Buy Now",
}) => {
  const defaultPlans = [
    {
      nameEN: "International Information Pages",
      nameVN: "Trang thông tin quốc tế",
      features: [
        {
          name: "Everything ALS",
          link: "https://www.everythingals.org/",
        },
        {
          name: "ALS Worldwide",
          link: "https://alsworldwide.org/",
        },
        {
          name: "ALS News Today",
          link: "https://alsnewstoday.com/",
        },
      
      ],
    },
    {
      
      nameEN: (<>International ALS Communities<br/><br/></>),
      nameVN: (<>Trang cộng đồng quốc tế<br/></>),
      features: [
        {
          name: "ALS Association",
          link: "https://www.als.org/",
        },
        // {
        //   name: "Healing ALS",
        //   link: "https://healingals.org/",
        // },
        {
          name: "Healing ALS ",
          link: "https://healingals.org/",
        },
        {
          name: "ALS Canada",
          link: "https://als.ca/",
        },
      ],
    },
    {
      nameEN: (<>ALS Winner Blogs<br/><br/></>),
      nameVN: (<>Trang tin tức<br/></>),
      features: [
        {
          name: "Eric Is Winning ",
          link: "https://ericiswinning.com/",
        },
        {
          name: "ALS Winners  ",
          link: "https://www.alswinners.com/",
        },
        // {
        //   name: "Energy Healing",
        //   link: "http://energyhealingstrategies.com/",
        // },

        {
          name: "Winning The Fight ",
          link: "https://winningthefight.org/",
        },
      ],
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(
        115deg,
        rgba(56, 178, 172, 1) 0%,
        rgba(129, 230, 217, 1) 100%
      );
    `,
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(
        115deg,
        #6415ff,
        #7431ff,
        #8244ff,
        #8e56ff,
        #9a66ff
      );
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(
        115deg,
        rgba(245, 101, 101, 1) 0%,
        rgba(254, 178, 178, 1) 100%
      );
    `,
  ];
  const context = useContext(Context);
  const language = context.locale;
  return (
    <Container>
      <Content>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured} className="drop-shadow-xl">
          {language === "en" ?     <PlanHeader>
                <span className="name">{plan.nameEN}</span>
              </PlanHeader>:     <PlanHeader>
                <span className="name">{plan.nameVN}</span>
              </PlanHeader>}
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    <a  onClick={()=>window.open(`${feature.link}`)} className="text-green-700">{feature.name}</a>
                  </span>
                ))}
              </PlanFeatures>
            </Plan>
          ))}
        </PlansContainer>
      </Content>
    </Container>
  );
};
