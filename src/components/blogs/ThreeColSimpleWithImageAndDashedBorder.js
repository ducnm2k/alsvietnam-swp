import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  SectionHeading as HeadingTitle,
  Subheading,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import Becomeasapling from "../../images/Become-a-sapling.jpg";
import Becomeaseed from "../../images/Become-a-seed.jpg";
import BecomeaseedCut from "../../images/Become-a-seed-cut.jpg";
import Becomeasprout from "../../images/Become-a-sprout.jpg";
import { Context } from "../Wrapper";

const Container = tw.div`relative lg:py-8`;
const Content = tw.div`max-w-screen-2xl mx-auto `;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-5 lg:w-1/3`;
const Heading = tw(
  SectionHeading
)`text-2xl lg:text-4xl font-semibold text-gray-900`;
const HeadingInfoContainer = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;

const Card = tw.div`lg:mx-1 xl:mx-10 max-w-2xl  h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center mx-6 xl:mx-4 mb-2 `,
]);

const Details = tw.div`px-0 py-6 rounded  rounded-t-none  flex-1 flex flex-col  text-center `;
const MetaContainer = tw.div`flex items-center  py-3 `;
const MetaList = tw.div`py-3 `;
const Meta = styled.div`
  ${tw`text-secondary-500 font-medium text-xl flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1 `}
  }
`;

const Title = tw.div`mt-0 text-white leading-snug text-xl`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;

const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ heading, status }) => {
  const context = useContext(Context);
  const language = context.locale;
  const blogPosts = [
    {
      imageSrc: Becomeaseed,
      titleEN: (
        <>
          <div>Becoming a</div>
          <strong>Seed</strong>
          <div>(PLANNERS)</div>
        </>
      ),
      titleVN: (
        <>
          <div>Trở thành</div>
          <strong>hạt giống</strong>
          <div>(xây dựng kế hoạch)</div>
        </>
      ),
      url: "https://reddit.com",
    },
    {
      imageSrc: Becomeasprout,
      author: "Owais Khan",
      titleEN: (
        <>
          <div>Becoming a</div>
          <strong>Seedling</strong>
          <div>(IMPLEMENTER)</div>
        </>
      ),
      titleVN: (
        <>
          <div>Trở thành</div>
          <strong> mầm non</strong>
          <div>(triển khai hoạt động)</div>
        </>
      ),
      url: "https://timerse.com",
    },
    {
      imageSrc: Becomeasapling,
      author: "Steve Schoger",
      titleEN: (
        <>
          <div>Becoming a</div>
          <strong>Sapling</strong>
          <div>(SUPPORTER)</div>
        </>
      ),
      titleVN: (
        <>
          <div>Trở thành</div>
          <strong>cây non</strong>
          <div>(những người ủng hộ)</div>
        </>
      ),
      url: "https://timerse.com",
    },
  ];
  return (
    <Container>
      <Content>
        {heading ? (
          <HeadingInfoContainer>
            {language === "en" ? (
              <Heading>{heading}</Heading>
            ) : (
              <Heading>Tham gia cùng chúng tôi</Heading>
            )}
          </HeadingInfoContainer>
        ) : null}
        {heading ? (
          <ThreeColumn>
            {blogPosts.map((post, index) => (
              <Column key={index}>
                <Card>
                  <Image
                    className="h-[18rem] w-[18rem] xl:h-[20rem] xl:w-[20rem] 2xl:h-[25rem] 2xl:w-[25rem]  "
                    style={{
                      borderRadius: "50%",
                    }}
                    imageSrc={post.imageSrc}
                  />

                  <Details className="bg-[#6abf4b]">
                    {language === "en" ? (
                      <Title>{post.titleEN}</Title>
                    ) : (
                      <Title>{post.titleVN}</Title>
                    )}
                  </Details>
                </Card>
              </Column>
            ))}
          </ThreeColumn>
        ) : null}
      </Content>
      {!heading ? (
        <div>
          <img
            src={BecomeaseedCut}
            className="relative md:px-24 pb-32 md:pb-16"
          />

          <div className="invisible lg:visible">
            <h4
              style={{
                fontSize: "2rem",
                position: "absolute",
                bottom: "5rem",
                right: "7rem",
                backgroundColor: "#6abf4b",
                color: "white",

                paddingRight: "20px",
                width: "40rem",
                height: "8rem",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              {" "}
              {language === "en" ? "BECOMING A " : "TRỞ THÀNH "}
              <strong style={{ fontSize: "4rem" }}>
                {language === "en" ? "Seed" : "Hạt giống"}
              </strong>
            </h4>
          </div>
          <div className="visible md:invisible">
            <h4
              style={{
                fontSize: "16px",
                position: "absolute",
                bottom: "4rem",
                right: "5px",
                backgroundColor: "#6abf4b",
                color: "white",
                paddingLeft: "5px",
                width: "16rem",
                height: "5rem",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              {language === "en" ? "BECOMING A" : "TRỞ THÀNH"}{" "}
              <strong style={{ fontSize: "28px" }}>
                {language === "en" ? "Seed" : "Hạt giống"}
              </strong>
            </h4>
          </div>
        </div>
      ) : null}
    </Container>
  );
};
