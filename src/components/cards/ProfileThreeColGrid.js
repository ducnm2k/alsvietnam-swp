import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
  Container,
  Content2Xl,
  ContentWithPaddingXl,
} from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import MainFeature1 from "../../pages/aboutUs/AboutUsCard";
import ThaoStory from "images/Thao.png";
import MrsLan from "images/MrsLan.jpg";
import MsDung from "images/MsDung.png";
import MsPhuong from "images/MsPhuong.png";
import MsHuong from "images/MsHuong.png";
import Alex from "images/ambassadors/tuan.jpg";
import Ambassador1 from "images/ambassadors/phuong.jpg";
import Ambassador2 from "images/ambassadors/thuong.jpg";
import ChauAnh from "images/ambassadors/anh.jpg";

import Huy from "images/ambassadors/huy.jpg";
import Yen from "images/ambassadors/yen.jpg";
import SpeMember from "components/features/TwoColWithButton";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { FormattedMessage } from "react-intl";
import { Context } from "components/Wrapper";

const HeadingContainer = tw.div``;
const TextContent = tw.div` lg:py-8 text-left `;
const Subheadingcard = tw(
  SectionHeading
)`text-lg  font-bold text-primary-600 text-center`;
const Heading = tw(
  SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 text-left mt-8 md:mt-0`;
const Subheading = tw.p`text-left relative  inline-block `;
const Description = tw.p` text-left md:text-left text-base   font-normal leading-relaxed text-justify`;

const Cards = tw.div`flex flex-wrap flex-row mx-auto items-center justify-center md:items-start  md:justify-start`;
const Card = tw.div`mr-4 flex flex-col items-center mb-8`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
      background-repeat: no-repeat;
    `}
  ${tw`w-40 h-40 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-1`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }

  .name {
    ${tw`mt-1 text-base font-medium text-gray-900`}
    
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;
const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);
export default ({
  heading = "",
  subheading = "Our Team",
  description = "Chúng tôi mong muốn nhận được sự góp sức từ các tổ chức và cá nhân để thực hiện sứ mệnh của mình. Tham gia cùng chúng tôi để biến nỗi sợ hãi ALS thành hi vọng và chữa lành.",
  buttonRounded = true,
  primaryButtonText = "Click the link to view",
  primaryButtonUrl = "https://storage.googleapis.com/alsvietnam.appspot.com/general/45068ce4-be86-4669-a6e0-3eeb165e77d8.pdf",
}) => {
  const ListAmbassadors = [
    {
      name: "Lê Nguyễn Minh Tuấn",
      positionEN: "Content",
      positionVN: "Nội dung",
      image: Alex,
    },
    {
      name: "Trần Hồng Phương",
      positionEN: "Translating",
      positionVN: "Dịch thuật",
      image: Ambassador1,
    },
    {
      name: "Lương Thị Hà Thương",
      positionEN: "Translating",
      positionVN: "Dịch thuật",
      image: Ambassador2,
    },
    {
      name: "Hồ Châu Anh",
      positionEN: "Creative",
      positionVN: "Sáng tạo",
      image: ChauAnh,
    },
    {
      name: "Nguyễn Thế Huy",
      positionEN: "Proofreader",
      positionVN: "Biên dịch",
      image: Huy,
    },
    {
      name: "Hoàn Thị Hải Yến",
      positionEN: "Content",
      positionVN: "Nội dung",
      image: Yen,
    },
  ];

  const context = useContext(Context);
  const language = context.locale;
  return (
    <Container>
      <HeadingContainer>
        <TextContent>
          <Subheading>{heading}</Subheading>
          <Description>{description}</Description>
        </TextContent>
      </HeadingContainer>
      <SpeMember
        subheading={
          <Subheadingcard>Nguyen Xuan Lan - Giám đốc điều hành</Subheadingcard>
        }
        heading="Giám đốc điều hành"
        description="Hiện cô đang làm việc cho công ty Unilever Việt Nam với vai trò là Trưởng phòng Bảo Vệ Thương Hiệu 
        và là Tổng Thư Ký Hiệp Hội Chống hàng giả của các Doanh nghiệp nước ngoài tại VN (VACIP). 
        Cô vận động và tổ chức nhiều chương trình thiện nguyện cho người nghèo và người ốm neo đơn trong nhiều năm qua.
        Cô Lan mong muốn đồng hành cùng các tri thức, các y bác sĩ, viên chức các ngành và sinh viên cả nước để nâng cao nhận thức cộng đồng về các nguyên nhân, 
        cách phòng bệnh cũng như ủng hộ các giải pháp tích cực để giúp bệnh nhân có cuộc sống tốt đẹp hơn."
        buttonRounded={false}
        primaryButtonText="Read more"
        imageSrc={MrsLan}
      />
      <SpeMember
        subheading={
          <Subheadingcard>
            Nguyễn Thảo - Sáng lập, Phát triển nội dung
          </Subheadingcard>
        }
        heading="Sáng lập, Phát triển nội dung"
        buttonRounded={false}
        primaryButtonText="Read more"
        description="Là bệnh nhân ALS từ năm 2017. Cô đã nỗ lực tìm kiếm các giải pháp từ những người chiến thắng căn bệnh này từ khắp nơi trên thế giới. Cô mong muốn nâng cao kiến thức cộng đồng, thay đổi nhìn nhận của cộng đồng y khoa và nha khoa truyền thống để giúp bệnh nhân có cuộc sống tốt đẹp hơn. Cô tốt nghiệp kỹ sư Hóa năm 1997, thạc sĩ Quản trị kinh doanh - từng làm Giám đốc tiếp thị và Truyền thông cho các tập đoàn đa quốc gia."
        imageSrc={ThaoStory}
      />
      <SpeMember
        subheading={<Subheadingcard>Dung Nguyễn - Quản trị dự án</Subheadingcard>}
        heading="Quản trị dự án"
        description="Cô có nhiều năm kinh nghiệm trong lĩnh vực thương mại, 
        xây dựng thương hiệu và truyền thông. Cô nhận thấy mình may mắn khi được ở cương vị trao đi sự giúp đỡ. 
        Cô phụ trách triển khai các dự án, dẫn dắt và động viên các tình nguyện viên tận dụng kiến thức và kỹ năng để mang lại
        giá trị thiết thực cho bệnh nhân."
        buttonRounded={false}
        primaryButtonText="Read more"
        imageSrc={MsDung}
      />
      {/* <SpeMember
        subheading={<Subheadingcard>Lan Phương - Hợp tác Quốc Tế</Subheadingcard>}
        heading="Hợp tác Quốc Tế"
        description="Cô có nhiều năm kinh nghiệm trong lĩnh vực thương mại quốc tế. 
        Cô tin tưởng vào sự phát triển không ngừng của khoa học cũng như sự mầu nhiệm của cuộc sống. 
        Cô hi vọng ALS Vietnam có thể hợp tác với các tổ chức ALS quốc tế, lĩnh hội kiến thức y khoa, 
        khoa học công nghệ, kết nối cộng đồng chuyên môn trong và ngoài nước để mang lại lợi ích cho bệnh nhân 
        và cộng đồng người Việt sinh sống ở Việt Nam và nước ngoài. "
        buttonRounded={false}
        primaryButtonText="Read more"
        imageSrc={MsPhuong}
      />
      <SpeMember
        subheading={<Subheadingcard>Hương Nguyễn - Thu hút nhân tài</Subheadingcard>}
        heading="Thu hút nhân tài"
        description="Cô hiểu rằng việc giúp đỡ người khác trong cuộc chiến chống lại bệnh ALS không hề đơn giản, 
        nó đòi hỏi sự kiên nhẫn của không chỉ một mà rất nhiều người đoàn kết vì một mục tiêu chung. 
        ALS Vietnam mong muốn phát triển bền vững dựa vào sức mạnh tổng hợp của các cá nhân và tổ chức, 
        tình nguyện viên và cộng tác viên. Mỗi người là một cây non gây dựng và nuôi dưỡng cây thường xanh - ALS Vietnam. "
        buttonRounded={false}
        primaryButtonText="Read more"
        imageSrc={MsHuong}
      />
      <SpeMember
        subheading={<Subheadingcard>Bảo Ngọc - Quản trị hành chánh</Subheadingcard>}
        heading="Quản trị hành chánh"
        description="Cô tin tưởng vào sự tự giác của mỗi cá nhân để giữ gìn các giá trị cốt lõi của tổ chức, 
        có cách thức ứng xử phù hợp để môi trường làm việc minh bạch, lấy bệnh nhân làm trung tâm 
        và xem trọng kết quả từ những quyết định với mọi việc, dù lớn hay nhỏ."
        buttonRounded={false}
        primaryButtonText="Read more"
        imageSrc={""}
      /> */}
      <TextContent>
        <Subheading>
          {
            <Subheadingcard className="text-center">
              <FormattedMessage id="aboutUs.studentAmbassadors" />
            </Subheadingcard>
          }
        </Subheading>
      </TextContent>
      <Cards>
        {ListAmbassadors.map((list, index) => (
          <Card key={index}>
            <CardImage imageSrc={list.image} />

            <CardContent>
              <span className="name">{list.name}</span>
              <span className="position">
                {language === "en" ? list.positionEN : list.positionVN}
              </span>
            </CardContent>
          </Card>
        ))}
      </Cards>
      <TextContent>
        <Subheading>
          {
            <Subheadingcard>
              <FormattedMessage id="aboutUs.volunteers" />
            </Subheadingcard>
          }
        </Subheading>

        <Description>
          {language === "en"
            ? "ALS Vietnam wishes to cooperate with universities and organizations in implementing community service projects, giving opportunities for students to practice problem-solving skills and put practical thinking into practice on a mission to bring differentiated value to ALS patients."
            : "ALS Vietnam mong muốn hợp tác cùng các trường đại học, các tổ chức trong triển khai các dự án phục vụ cộng đồng, trao cơ hội cho sinh viên cọ sát và rèn luyện kỹ năng giải quyết vấn đề, tư duy thực tiễn để thực hiện sứ mệnh mang lại giá trị khác biệt cho bệnh nhân ALS."}
        </Description>
        <PrimaryButton
          // buttonRounded={buttonRounded}
          as="a"
          href={primaryButtonUrl}
        >
          <FormattedMessage id="button.readMore" />{" "}
        </PrimaryButton>
      </TextContent>

      <TextContent>
        <Subheading>
          {
            <Subheadingcard>
              <FormattedMessage id="aboutUs.codeOfConduct" />
            </Subheadingcard>
          }
        </Subheading>
        <Description>
          {language === "en"
            ? "In order to preserve our core values and to help members make decisions when taking action, we introduce the Code of Conduct of ALS, comprising principles and standards for all members, collaborators, and partners of ALS Vietnam. It may not be suitable for all situations, so ALS Vietnam believes that the self–discipline of each individual will establish standards of appropriate behavior for a transparent, civilized, cooperative working environment."
            : "Để các giá trị cốt lõi của tổ chức được giữ gìn và nhằm giúp các thành viên ra quyết định khi hành động, chúng tôi giới thiệu Bộ Quy Tắc Ứng Xử của ALS Vietnam. Bộ Quy Tắc Ứng Xử là cẩm nang bao gồm các nguyên tắc, tiêu chuẩn hướng dẫn cho tất cả các thành viên, cộng tác viên, và đối tác của ALS Vietnam. Bộ Quy Tắc Ứng Xử có thể không phù hợp cho mọi tình huống, vì thế ALS Vietnam tin tưởng vào sự tự giác của mỗi cá nhân nhằm có được cách thức ứng xử phù hợp nhất để môi trường làm việc minh bạch, văn minh, cùng nhau phát triển."}
        </Description>

        <PrimaryButton
          // buttonRounded={buttonRounded}
          as="a"
          href={primaryButtonUrl}
        >
          <FormattedMessage id="button.readMore" defaultMessage="Xem thêm" />
        </PrimaryButton>
      </TextContent>
    </Container>
  );
};
