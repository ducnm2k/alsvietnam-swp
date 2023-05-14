import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import MainFeature1 from "./AboutUsCard";

import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import HeadNav from "../../components/hero/HeadNav";
import FootNav from "../../components/footers/FootNav";
import TitleNav from "../../components/hero/TitleNav";
import { SectionHeading } from "../../components/misc/Headings";
import { Context } from "components/Wrapper";

const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Body = styled.div`
  margin-left: 6rem;
  margin-right: 6rem;
`;
const Subheading = tw(
  SectionHeading
)`text-lg lg:text-xl  font-semibold text-primary-600`;

const SubheadingCenter = tw(
    SectionHeading
)`text-xl lg:text-3xl font-semibold text-center md:text-center text-primary-600`;
const Text = styled.div`
  ${tw`text-base `}
  p {
    ${tw` leading-loose`}
  }
  h1 {
    ${tw`text-xl font-bold `}
  }
  h2 {
    ${tw`text-lg font-bold `}
  }
  h3 {
    ${tw`text-base font-bold `}
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

export default () => {
  const context = useContext(Context);
  const language = context.locale;
  return (
    <body className="font-[Montserrat]">
      <Container>
        <HeadNav activePage="AboutUs" />
        {language === "en" ? (
          <div>
            <TitleNav pageTitleString="About Us" />
            <MainFeature1
              subheading={<Subheading>What We Do</Subheading>}
              description="This is a non-profit project, with the purpose of communicating about ALS disease. "
            />
            <MainFeature1
              subheading={<Subheading>Vision</Subheading>}
              description="We wish that we can change fear and hopelessness into hope and positivity for those afflicted by ALS and other neurodegenerative diseases. At the same time, we also support holistic solutions to help patients to have a better life."
            />
            <MainFeature1
              subheading={<Subheading>Mission</Subheading>}
              description="We raise public awareness and bring hope to patients suffering from ALS and other neurodegenerative diseases in Vietnam. We not only constantly learn from experts and ALS Winners who beat ALS disease but also collate a great deal of ALS-related research worldwide to provide ALS patients and their relatives with proof that ALS symptoms can be reversed by using holistic protocols or at least alleviating its effects."
            />
            <MainFeature1
              subheading={<Subheading>The Values That Guide us</Subheading>}
              description={
                <Text>
                  <ul>
                    <li>
                      <p className="text-base">
                        Patient Focused - We always strive to bring objective
                        and accurate information. We also encourage readers to
                        learn new solutions and opinions from various resources,
                        and be open to wise options for healing..
                      </p>
                    </li>
                    <li>
                    <p className="text-base ">
                        Respect - Listen and embrace others' unique skills and
                        knowledge. We care about the consequences of our
                        decisions, big and small, for those around us.
                      </p>
                    </li>
                    <li>
                    <p className="text-base ">
                        Compassion - We help each other and those we serve to
                        remain hopeful in the face of adversity.{" "}
                      </p>
                    </li>
                    <li>
                    <p className="text-base ">
                        Courage - What we do is not easy. It requires courage
                        and patience deal with difficulties and do the right
                        thing.{" "}
                      </p>
                    </li>
                    <li>
                    <p className="text-base ">
                        One team - We will accomplish more together by creating
                        a community with care and love.{" "}
                      </p>
                    </li>
                  </ul>
                </Text>
              }
            />
            <MainFeature1
              subheading={<Subheading>Our Approach</Subheading>}
              description={
                <Text>
                    <p className="text-base">
                    Depending on human resources and financial capacity, we can
                    gradually deploy different communication channels.
                  </p>
                  <p className="text-base ">
                    <strong>
                      1. Build the website alsvietnam.org with the following
                      main contents:
                    </strong>
                  </p>
                  <ul>
                    <li>
                    <p className="text-base">
                        Success stories of ALS Winners (long-term patients/who
                        have recovered from illness)
                      </p>
                    </li>
                    <li>
                    <p className="text-base ">Consult treatment from healing experts</p>
                    </li>
                    <li>
                    <p className="text-base ">
                        Knowledge gathered from research published on the
                        international ALS community and reputable medical souces{" "}
                      </p>
                    </li>
                  </ul>
                  <p className="text-base ">
                    <strong>2. Youtube Channel:</strong>
                  </p>
                  <ul>
                    <li>
                    <p className="text-base ">
                        Produce videos about success stories of ALS winners.
                      </p>
                    </li>
                    <li>
                    <p className="text-base ">
                        Create subtitles for speeches/interviews by PALS (ALS
                        patients), FALS (family members), and healing experts.
                      </p>
                    </li>
                  </ul>
                  <p className="text-base ">
                    <strong>3. Medical events / conferences</strong>
                  </p>
                  <ul>
                    <li>
                    <p className="text-base ">
                        Coordinate and organize periodic online medical seminars
                        to update information for patients and physicians in
                        related fields.
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Connect patients with doctors or medical facilities to
                        conduct research or apply artificial intelligence to
                        support patient communication (voice storage, eye
                        gazing...){" "}
                      </p>
                    </li>
                  </ul>
                  <p className="text-base">
                    <strong>
                      4. Set up a community fanpage for PALS and FALS to share
                      and practice healing.
                    </strong>
                  </p>
                </Text>
              }
            />

            <TeamCardGrid subheading={<Subheading>Team Members</Subheading>} />
          </div>
        ) : (
          <div>
            <TitleNav pageTitleString="Về chúng tôi" />
            <MainFeature1
              subheading={<Subheading>Chúng tôi làm gì</Subheading>}
              description="Đây là dự án phi lợi nhuận, với mục đích truyền thông về bệnh ALS."
            />
            <MainFeature1
              subheading={<Subheading>Tầm nhìn</Subheading>}
              description="Chúng tôi mong muốn thay thế nỗi sợ hãi và tuyệt vọng thành hy vọng và sự tích cực cho những người bị ảnh hưởng bởi ALS cũng như các bệnh lý thoái hóa thần kinh khác và đồng thời ủng hộ các giải pháp toàn diện để giúp họ có cuộc sống tốt đẹp hơn."
            />
            <MainFeature1
              subheading={<Subheading>Sứ mệnh</Subheading>}
              description="Chúng tôi nâng cao nhận thức của cộng đồng và mang hy vọng cho những người bị ảnh hưởng bởi ALS cũng như người có các bệnh lý thoái hóa thần kinh khác ở Việt Nam. Chúng tôi kết nối và không ngừng học hỏi từ những người chiến thắng ALS, giới chuyên gia và đối chiếu các nghiên cứu liên quan trên khắp thế giới để cung cấp cho bệnh nhân ALS cũng như người thân của họ những bằng chứng rằng các triệu chứng ALS có thể được đảo ngược hoặc làm chậm sự tiến triển của nó ở mức tối thiểu khi sử dụng các giải pháp đúng đắn."
            />
            <MainFeature1
              subheading={<Subheading>Giá trị theo đuổi</Subheading>}
              description={
                <Text>
                  <ul>
                    <li>
                    <p className="text-base ">
                        Lấy bệnh nhân làm trung tâm - Chúng tôi luôn nỗ lực để
                        mang đến những thông tin khách quan và chính xác. Chúng
                        tôi cũng khuyến khích các độc giả cùng tìm hiểu thêm
                        những giải pháp mới, các ý kiến từ nhiều nguồn tư liệu
                        khác nhau và cởi mở hơn với những giải pháp đúng đắn để
                        quá trình chữa trị đạt được hiệu quả tốt nhất.
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Tôn trọng - Lắng nghe và tận dụng những kiến ​​thức và
                        kỹ năng của người khác. Chúng tôi xem trọng kết quả từ
                        những quyết định của mình đối với mọi việc, dù lớn hay
                        nhỏ.
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Thấu cảm - Chúng tôi giúp nhau và gia đình bệnh nhân giữ
                        vững hy vọng ngay cả khi đối mặt với nghịch cảnh.
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Dũng cảm - Điều chúng tôi làm không hề dễ dàng. Nó đòi
                        hỏi lòng can đảm và nhẫn nại để đối mặt với khó khăn và
                        làm điều đúng đắn.
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Đồng đội - Chúng tôi cùng nhau xây dựng một cộng đồng
                        chan hòa tình thương, quan tâm và biết ơn.
                      </p>
                    </li>
                  </ul>
                </Text>
              }
            />
            <MainFeature1
              subheading={<Subheading>Phương pháp tiếp cận</Subheading>}
              description={
                <Text>
                   <p className="text-base">
                    Tuỳ vào nguồn nhân sự và năng lực tài chính, chúng tôi có
                    thể triển khai các kênh truyền thông khác nhau.
                  </p>
                  <p className="text-base">
                    <strong>
                      1. Xây dựng website alsvietnam.org với các nội dung chính
                      sau:
                    </strong>
                  </p>
                  <ul>
                    <li>
                    <p className="text-base">
                        Chia sẻ các câu chuyện thành công của ALS Winners (những
                        người bệnh lâu năm/đã khỏi bệnh)
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Các phương pháp điều trị tham khảo từ các chuyên gia
                        chữa lành
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Cung cấp các kiến thức thu thập được từ các nghiên cứu
                        đăng trên cộng đồng ALS quốc tế và các nguồn thông tin
                        tin cậy.
                      </p>
                    </li>
                  </ul>
                  <p className="text-base">
                    <strong>2. Kênh Youtube:</strong>
                  </p>
                  <ul>
                    <li>
                    <p className="text-base">
                        Sản xuất video về những câu chuyện thành công của ALS
                        winners.
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Thực hiện phụ đề cho các bài phát biểu/phỏng vấn của
                        PALS (bệnh nhân ALS), FALS (người nhà), và các chuyên
                        gia chữa lành.
                      </p>
                    </li>
                  </ul>
                  <p className="text-base">
                    <strong>3. Tổ chức sự kiện / hội thảo Y khoa </strong>
                  </p>
                  <ul>
                    <li>
                    <p className="text-base">
                        Phối hợp tổ chức định kỳ hội thảo Y khoa trực tuyến để
                        cập nhật thông tin cho bệnh nhân và y bác sĩ các ngành
                        liên quan.
                      </p>
                    </li>
                    <li>
                    <p className="text-base">
                        Kết nối bệnh nhân với bác sĩ hoặc cơ sở y tế để thực
                        hiện các nghiên cứu hoặc ứng dụng trí tuệ nhân tạo nhằm
                        hỗ trợ bệnh nhân giao tiếp (lưu trữ giọng nói, giao tiếp
                        bằng liếc mắt ...)
                      </p>
                    </li>
                  </ul>
                  <p className="text-base">
                    <strong>
                      4. Lập fanpage cộng đồng để PALS và FALS chia sẻ, thực tập
                      chữa lành.
                    </strong>
                  </p>
                </Text>
              }
            />

            <TeamCardGrid subheading={<SubheadingCenter>Thành viên</SubheadingCenter>} />
          </div>
        )}
      </Container>
      <FootNav />
    </body>
  );
};
