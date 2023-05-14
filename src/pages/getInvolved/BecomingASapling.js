import { Card } from "antd";
import React, {useContext} from "react";

import { SectionHeading } from "components/misc/Headings";
import tw from "twin.macro";
import styled from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import Becomeasapling from "../../images/Become-a-sapling.jpg";
import {Context} from "../../components/Wrapper";
const HeadingRow = tw.div`flex justify-center`;
const Heading = tw(SectionHeading)`text-5xl font-bold text-gray-900`;
const Text = styled.div`
  ${tw`text-base  text-gray-800`}
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
        ${tw`mt-0 inline leading-loose`}
      }
    }
  }
`;

export default function BecomingASapling() {
  const context = useContext(Context);

  return (
    <Container className="mt-16">
      <ContentWithPaddingXl>
        <Card
          className="shadow-inner text-center"
          style={{
            backgroundColor: "#6abf4b",
          }}
        >{context.locale === "en"?
          <h1 className="lg:text-[1.5rem] text-[0.75rem] text-white">
            BECOMING A{" "}
            <strong className="lg:text-[3rem] text-[1.5rem]">Sapling</strong>
          </h1>: <h1 className="lg:text-[1.5rem] text-[0.75rem] text-white">
              TRỞ THÀNH{" "}
              <strong className="lg:text-[3rem] text-[1.5rem]">Cây non</strong>
            </h1>}
        </Card>
        <div className="grid grid-cols-4">

          <div className="col-span-4 lg:col-span-1 py-8 px-8">
            <img src={Becomeasapling} className="h-full"/>
          </div>
          <div className="col-span-4 lg:col-span-3">
            {context.locale === "en"?
                <Text>
              <Heading>
                <li>Cash Donations</li>
              </Heading>
              <p>
                Cash donations can be transferred directly to ALS Vietnam
                account or through ALS Vietnam fund at VNExpress.
              </p>
              <Heading>
                <li>In-kind Contributions</li>
              </Heading>
              <p>
                We also welcome gifts that can assist patients in their daily
                lives, including but not limited to walkers, wheelchairs,
                speaking aids, etc.
              </p>
            </Text>: <Text>
                  <Heading>
                    <li>Bằng tiền mặt</li>
                  </Heading>
                  <p>
                    Các khoản đóng góp bằng tiền mặt có thể được chuyển trực tiếp đến tài khoản ALS Vietnam hoặc qua đại diện quỹ của ALS Vietnam tại VNExpress.
                  </p>
                  <Heading>
                    <li>Bằng hiện vật</li>
                  </Heading>
                  <p>
                    Chúng tôi cũng rất hoan nghênh những món quà có thể hỗ trợ người bệnh trong cuộc sống hàng ngày, bao gồm nhưng không giới hạn như xe tập đi, xe lăn, dụng cụ khuếch tán âm thanh…
                  </p>
                </Text>}
          </div>
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
}
