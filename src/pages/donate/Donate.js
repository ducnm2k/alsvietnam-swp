import React, { useContext, useState } from "react";
import tw from "twin.macro"; //eslint-disable-line

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import HeadNav from "../../components/hero/HeadNav";

import FootNav from "../../components/footers/FootNav";
import { ContentWithPaddingXl } from "../../components/misc/Layouts";
import { SectionHeading } from "../../components/misc/Headings";
import TitleNav from "../../components/hero/TitleNav";
import { Context } from "components/Wrapper";
import CommingSoon from "pages/result/CommingSoon";

const Heading = tw(SectionHeading)`text-5xl font-bold text-gray-900  `;
const HeadingRow = tw.div`flex justify-center`;

export default () => {
  const context = useContext(Context);
  const language = context.locale;
  const [option, setOption] = useState("als");

  const selectOption = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="font-[Montserrat]">
      <AnimationRevealPage>
        <HeadNav />
        {context.locale === "en" ? (
          <TitleNav pageTitleString="Donation" />
        ) : (
          <TitleNav pageTitleString="Đóng góp" />
        )}
        <ContentWithPaddingXl className="mt-8 grid justify-items-center">
       <div className="text-xl md:text-2xl">
        {language === "en" ? "Thank you for your interest, the process is still under construction." : "Cám ơn bạn đã quan tâm, quy trình vẫn đang được xây dựng."}
       </div>
        </ContentWithPaddingXl>
        {/* <ContentWithPaddingXl className="mt-8 grid justify-items-center">

          {context.locale === "en" ? (
            <Radio.Group
              optionType="button"
             
              value={option}
              onChange={selectOption}
              defaultValue="als"
            >
              {" "}
              {option === "als" ? (
                <>
                  {" "}
                  <Radio.Button
                    value="als"
                    style={{
                      background: "#00783f",
                      color: "white",
                      borderColor: "#00783f",
                    }}
                  >
                    <GiftOutlined /> ALS Vietnam Fund
                  </Radio.Button>
                  <Radio.Button
                    value="campaign"
                    style={{
                      background: "white",
                      borderColor: "#00783f",
                      color: "black",
                    }}
                  >
                    <HeartOutlined /> Campaigns
                  </Radio.Button>
                </>
              ) : (
                <>
                  {" "}
                  <Radio.Button
                    value="als"
                    style={{
                      background: "white",
                      borderColor: "#00783f",
                      color: "black",
                    }}
                  >
                    <GiftOutlined /> ALS Vietnam Fund
                  </Radio.Button>
                  <Radio.Button
                    value="campaign"
                    style={{
                      background: "#00783f",
                      color: "white",
                      borderColor: "#00783f",
                    }}
                  >
                    <HeartOutlined /> Campaigns
                  </Radio.Button>
                </>
              )}
            </Radio.Group>
          ) : (
            <Radio.Group
              optionType="button"
             
              onChange={selectOption}
              defaultValue="als"
            >
              {" "}
              {option === "als" ? (
                <>
                  {" "}
                  <Radio.Button
                    value="als"
                    style={{
                      background: "#00783f",
                      color: "white",
                      borderColor: "#00783f",
                    }}
                  >
                    <GiftOutlined /> Quỹ ALS Việt Nam
                  </Radio.Button>
                  <Radio.Button
                    value="campaign"
                    style={{
                      background: "white",
                      borderColor: "#00783f",
                      color: "black",
                    }}
                  >
                    <HeartOutlined /> Các Chiến Dịch
                  </Radio.Button>
                </>
              ) : (
                <>
                  {" "}
                  <Radio.Button
                    value="als"
                    style={{
                      background: "white",
                      borderColor: "#00783f",
                      color: "black",
                    }}
                  >
                    <GiftOutlined /> Quỹ ALS Việt Nam
                  </Radio.Button>
                  <Radio.Button
                    value="campaign"
                    style={{
                      background: "#00783f",
                      color: "white",
                      borderColor: "#00783f",
                    }}
                  >
                    <HeartOutlined /> Các Chiến Dịch
                  </Radio.Button>
                </>
              )}
            </Radio.Group>
          )}

          {option === "als" ? (
            <FormDonate />
          ) : (
            <DonateCompaign />
          )}
        </ContentWithPaddingXl> */}

        <div className="-mx-8 -mb-8">
          <FootNav />
        </div>
      </AnimationRevealPage>
    </div>
  );
};
