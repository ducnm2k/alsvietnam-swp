import { Card } from "antd";
import React, {useContext} from "react";

import { SectionHeading } from "components/misc/Headings";
import tw from "twin.macro";
import styled from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import Becomeasprout from "../../images/Become-a-sprout.jpg";
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
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default function BecomingASeedling() {
  const context = useContext(Context);
  return (
    <Container className="mt-16">
      <ContentWithPaddingXl>

     <Card
          className="shadow-inner text-center"
          style={{
            backgroundColor: "#6abf4b"
          }}
        >{context.locale === "en"?
          <h1 className="lg:text-[1.5rem] text-[0.75rem] text-white">
            BECOMING A{" "}
            <strong className="lg:text-[3rem] text-[2rem]">Seedling</strong>
          </h1>:<h1 className="lg:text-[1.5rem] text-[0.75rem] text-white">
           TRỞ THÀNH{" "}
           <strong className="lg:text-[3rem] text-[2rem]">Mầm non</strong>
         </h1>}
        </Card>

        <div className="grid grid-cols-4">
          <div className="col-span-4 lg:col-span-3">
            {context.locale === "en"?<Text>
              <Heading>
                <li>Becoming a Volunteer</li>
              </Heading>
              <p>
                to participate in content development, compile and translate
                original articles related to ALS, set up events, connect
                patients with doctors or medical facilities, etc.
              </p>
              <Heading>
                <li>Fundraising</li>
              </Heading>
              <p>
                to join us or create your own campaign to raise funds for ALS
                Vietnam to maintain operations, fund medical research, support
                ALS patients, etc.
              </p>
            </Text>:  <Text>
            <Heading>
              <li>Trở thành Tình Nguyện Viên</li>
            </Heading>
            <p>
              tham gia phát triển nội dung, biên phiên dịch các bài viết gốc liên quan đến ALS, set-up sự kiện, kết nối bệnh nhân với bác sĩ hoặc cơ sở y tế …
            </p>
            <Heading>
              <li>Chiến dịch Gây quỹ</li>
            </Heading>
            <p>
              cùng chúng tôi hoặc tạo chiến dịch của riêng bạn gây quỹ cho ALS Vietnam để duy trì vận hành, tài trợ công tác nghiên cứu y khoa, hỗ trợ bệnh nhân ALS…
            </p>
          </Text>}
          </div>
          <div className="col-span-4 lg:col-span-1 py-8 px-8">
            <img src={Becomeasprout} />
          </div>
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
}
