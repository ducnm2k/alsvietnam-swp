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

const HeadingRow = tw.div`flex justify-center`;
const Heading = tw(
  SectionHeading
)`text-5xl font-bold mt-10 text-gray-900  `;
const Text = styled.div`
  ${tw`text-base  text-gray-800`}
  p {
    ${tw`mt-10 text-base leading-loose`}
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
      ${tw` mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "COMMON GOALS" }) => {
  const context = useContext(Context);

  return (
    <Container>
      <ContentWithPaddingXl >
        <div
          style={{
            position: "relative",
            fontFamily: "Montserrat",
          }}
        >
          {context.locale === "en"?
          <Text>
            <p>
              From the earliest days of ALS Vietnam, we have held the belief
              that "Helping others is a part of life." Despite considering
              ourselves fortunate to be in a position to provide assistance, we
              also recognize that assisting others in the battle against ALS is
              not simple. To work together for a common goal, to tackle
              challenges as a team, and to act morally requires the fortitude
              and endurance of many individuals, not just one
            </p>

            <Heading>{headingText}</Heading>

            <ul>
              <li>
                <p>Raising community awareness of illness prevention.</p>
              </li>
              <li>
                <p>
                  Providing patients with ALS and other neurodegenerative
                  disorders with helpful information and help them acquire a
                  more optimistic outlook on the healing process.
                </p>
              </li>
              <li>
                Establishing connections among the medical community to change
                the perception and traditional treatment of ALS and other
                neurodegenerative diseases.
              </li>
            </ul>

            <p>
              ALS Vietnam wishes to develop sustainably based on the synergy of
              individuals and organizations, volunteers and collaborators, who
              are rich in kindness and silently dedicate their time and
              knowledge to bring hope and practical value for the patient. Every
              individual is a sapling that grows and cares for ALS Vietnam, an
              evergreen tree. Join us in the following ways to provide the
              fruits of planting the tree for more ALS patients:
            </p>


          </Text>:
              <Text>
                <p>
                  Ngay từ những ngày đầu của ALS Vietnam, chúng tôi tin rằng “Một phần của việc sống là biết giúp đỡ người khác”. Chúng tôi tự nhận thấy mình may mắn như thế nào khi được ở cương vị trao đi sự giúp đỡ, nhưng chúng tôi cũng hiểu việc giúp đỡ người khác trong cuộc chiến chống lại bệnh ALS không hề đơn giản. Nó đòi hỏi lòng dũng cảm và sự kiên nhẫn của không chỉ một mà rất nhiều người đoàn kết vì một mục tiêu chung, cùng nhau đối mặt với khó khăn và làm điều đúng đắn.
                </p>

                <Heading>Mục tiêu chung:</Heading>

                <ul>
                  <li>
                    <p>Nâng cao kiến thức cộng đồng để phòng bệnh.</p>
                  </li>
                  <li>
                    <p>
                      Giúp bệnh nhân ALS và các bệnh thoái hóa thần kinh có thêm thông tin hữu ích và có cái nhìn lạc quan hơn trong hành trình chữa lành.
                    </p>
                  </li>
                  <li>
                    Kết nối cộng đồng chuyên môn y khoa để thay đổi nhìn nhận và quy trình chữa trị truyền thống đối với bệnh ALS cũng như các bệnh thoái hóa thần kinh khác.
                  </li>
                </ul>

                <p>
                  ALS Vietnam mong muốn phát triển bền vững dựa vào sức mạnh tổng hợp của các cá nhân và tổ chức, tình nguyện viên và cộng tác viên- những người giàu lòng nhân ái thầm lặng cống hiến thời gian, kiến thức nhằm mang lại hy vọng và giá trị thiết thực cho bệnh nhân. Mỗi người là một cây non gây dựng và nuôi dưỡng cây thường xanh - ALS Vietnam. Để cây phát triển và đem trái ngọt đến cho nhiều bệnh nhân ALS hơn, hãy tham gia cùng chúng tôi theo các cách sau:
                </p>


              </Text>}
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
};
