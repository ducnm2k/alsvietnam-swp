import React, {useContext} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import {Context} from "../../components/Wrapper";
import Becomeaseed from "../../images/Become-a-seed.jpg";
import { Card } from "antd";
const HeadingRow = tw.div`flex justify-center`;
const Heading = tw(SectionHeading)`text-5xl font-bold text-gray-900`;
const Text = styled.div`
  ${tw`text-base  text-gray-800`}
  p {
    ${tw`mt-2 text-base leading-loose`}
  }
  h1 {
    ${tw`text-2xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-lg font-bold mt-6`}
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
export default () => {
  const context = useContext(Context);

  return (
    <Container >
      <ContentWithPaddingXl>
        {/* <div
        className="-mt-[6rem] px-8"
          style={{
            position: "relative",
            fontFamily: "Montserrat",
          }}
        >{context.locale === "en"?
          <Text>
            <Heading><li>Becoming a Member</li></Heading>

            <p>
              to partake in planning and operating activities of the
              organization and related projects.
            </p>

            <Heading><li>Becoming an Advisory Board Member</li></Heading>

            <p>
              to partake in medical professional consultation, coordinate to
              organize periodic online medical seminars to update information
              for patients and doctors in related fields, support media and
              communication, interpret, apply information technology/artificial
              intelligence to support patient communication (e.g voice storage,
              eye gaze technology, etc).
            </p>
          </Text>: <Text>
              <Heading><li>Trở thành Thành viên</li></Heading>

              <p>
                  tham gia xây dựng kế hoạch, vận hành các hoạt động của tổ chức và các dự án liên quan
              </p>

              <Heading><li>Trở thành Ban Cố Vấn</li></Heading>

              <p>
                  tham gia cố vấn chuyên môn y khoa, phối hợp tổ chức định kỳ hội thảo Y khoa trực tuyến để cập nhật thông tin cho bệnh nhân và y bác sĩ các ngành liên quan, hỗ trợ truyền thông, biên dịch, ứng dụng công nghệ thông tin/trí tuệ nhân tạo nhằm hỗ trợ bệnh nhân giao tiếp (lưu trữ giọng nói, giao tiếp bằng liếc mắt ...) …
              </p>
            </Text>}
        </div> */}
          <Card
          className="shadow-inner text-center"
          style={{
            backgroundColor: "#6abf4b"
          }}
        >{context.locale === "en"?
          <h1 className="lg:text-[1.5rem] text-[0.75rem] text-white">
            BECOMING A{" "}
            <strong className="lg:text-[3rem] text-[2rem]">Seed</strong>
          </h1>:<h1 className="lg:text-[1.5rem] text-[0.75rem] text-white">
           TRỞ THÀNH{" "}
           <strong className="lg:text-[3rem] text-[2rem]">Hạt giống</strong>
         </h1>}
        </Card>

        <div className="grid grid-cols-4">
          <div className="col-span-4 lg:col-span-3">
            {context.locale === "en"?<Text>
              <Heading>
                <li>Becoming a Member</li>
              </Heading>
              <p>
              to partake in planning and operating activities of the
              organization and related projects.
              </p>
              <Heading>
                <li>Becoming an Advisory Board Member</li>
              </Heading>
              <p>
              to partake in medical professional consultation, coordinate to
              organize periodic online medical seminars to update information
              for patients and doctors in related fields, support media and
              communication, interpret, apply information technology/artificial
              intelligence to support patient communication (e.g voice storage,
              eye gaze technology, etc).
              </p>
            </Text>:  <Text>
            <Heading>
              <li>Trở thành Tình Thành Viên</li>
            </Heading>
            <p>
            tham gia xây dựng kế hoạch, vận hành các hoạt động của tổ chức và các dự án liên quan
            </p>
            <Heading>
              <li>Trở thành Ban Cố Vấn</li>
            </Heading>
            <p>
            tham gia cố vấn chuyên môn y khoa, phối hợp tổ chức định kỳ hội thảo Y khoa trực tuyến để cập nhật thông tin cho bệnh nhân và y bác sĩ các ngành liên quan, hỗ trợ truyền thông, biên dịch, ứng dụng công nghệ thông tin/trí tuệ nhân tạo nhằm hỗ trợ bệnh nhân giao tiếp (lưu trữ giọng nói, giao tiếp bằng liếc mắt ...) …
            </p>
          </Text>}
          </div>
          <div className="col-span-4 lg:col-span-1 py-8 px-8">
            <img src={Becomeaseed} />
          </div>
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
};
