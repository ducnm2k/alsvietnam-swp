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
import MsThi from "images/MsThi.png"
import Alex from "images/ambassadors/tuan.jpg";
import Ambassador1 from "images/ambassadors/phuong.jpg";
import Ambassador2 from "images/ambassadors/thuong.jpg";
import ChauAnh from "images/ambassadors/anh.jpg";
import MsNgoc from "images/MsNgoc.png";
import Huy from "images/ambassadors/huy.jpg";
import Yen from "images/ambassadors/yen.jpg";
import SpeMember from "components/features/TwoColWithButton";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { FormattedMessage } from "react-intl";
import { Context } from "components/Wrapper";
import MrsThaoSStory from "components/features/Home/Mrs.Thao’sStory";

const HeadingContainer = tw.div``;
const TextContent = tw.div` lg:py-8 text-left `;
const Subheadingcard = tw(
  SectionHeading
)`text-lg  font-bold text-primary-600 text-center`;
const Heading = tw(
  SectionHeading
)`text-xl md:text-3xl font-semibold text-gray-900 text-left mt-8 md:mt-0`;
const Subheading = tw.p`text-left relative  inline-block `;

const Description = tw.p`pt-3 text-left md:text-left text-base   font-normal leading-relaxed text-justify`;

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
  heading = "Thành viên ",
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

  const ListManagement  = [
    {
      subheading_vn:"Thảo Nguyễn - Người sáng lập, Trưởng ban Nội dung. ",
      subheading_en:"Thao Nguyen - Founder & Content Manager ",
      description_vn:"Là bệnh nhân ALS từ năm 2017. Cô nỗ lực tìm kiếm các giải pháp, kết nối và học hỏi kinh nghiệm từ những người chiến thắng ALS trên thế giới. Cô vẫn đang cố gắng, bằng mọi cách, giảm thiểu ảnh hưởng của ALS và tin rằng các triệu chứng của bệnh có thể được đảo ngược hoặc làm chậm khi sử dụng các giải pháp đúng đắn. Cô không thể chiến đấu một mình, mong muốn chia sẻ thông tin hữu ích và kêu gọi sự chung tay để giúp đỡ bệnh nhân ALS và xây dựng ALS Vietnam. Cô tốt nghiệp Kỹ sư hóa năm 1997, Thạc sĩ Quản trị kinh doanh, từng làm Giám đốc tiếp thị và truyền thông cho các tập đoàn đa quốc gia.",
      description_en:"Diagnosed with ALS in 2017, Ms. Thao has been relentlessly exploring solutions and building connections with ALS survivors across the globe. She is determined to minimize the impact of ALS on her life and remains confident that, with the right approach, its symptoms can be reversed or slowed down. Ms. Thao understands that she cannot fight this battle with ALS alone, recognizing the importance of strength in numbers; as a result, she is committed to sharing valuable information, rallying support for ALS patients, and developing ALS Vietnam. As for her academic background, she holds a degree in Chemical Engineering (1997), a Master's in Business Administration, and has extensive experience as a Marketing and Communication Manager for multinational corporations.",
      showButton: true,
      imageSrc: ThaoStory
    },
    {
      subheading_vn: "Lan Nguyễn - Đồng sáng lập",
      subheading_en: "Lan Nguyen - Co-Founder",
      description_vn:"Hiện cô đang làm việc cho công ty Unilever Việt Nam với vai trò là Trưởng phòng Bảo vệ thương hiệu và là Tổng thư ký Hiệp hội Chống hàng giả và Bảo vệ quyền sở hữu trí tuệ của các doanh nghiệp có vốn đầu tư nước ngoài tại việt nam (VACIP). Cô vận động và tổ chức nhiều chương trình thiện nguyện cho người nghèo và người ốm neo đơn trong nhiều năm qua. Cô Lan mong muốn đồng hành cùng viên chức các ngành, các y bác sĩ, và sinh viên cả nước để nâng cao nhận thức cộng đồng về các nguyên nhân, cách phòng bệnh cũng như ủng hộ các giải pháp tích cực để giúp bệnh nhân ALS có cuộc sống tốt đẹp hơn.",
      description_en: "Ms. Lan Nguyen currently serves as the Brand Protection Manager at Unilever Vietnam and holds the position of General Secretary for the Vietnam Anti-Counterfeiting and Intellectual Property Protection Association of foreign invested enterprises  (VACIP). With a strong passion for helping others, she has actively campaigned and organized numerous charitable initiatives aimed at supporting the poor and the sick throughout the years. Ms. Lan is dedicated to collaborating with professionals, medical practitioners, and students across the country in order to raise public awareness regarding disease causes and prevention methods. She is committed to endorsing effective solutions that can significantly enhance the quality of life for ALS patients.",
      showButton: false,
      imageSrc: MrsLan
    },
    // {
    //   subheading_vn:"Dung Nguyễn - Trưởng ban Dự án",
    //   subheading_en:"Dung Nguyen - Project Manager",
    //   description_vn:"Cô có nhiều năm kinh nghiệm trong lĩnh vực thương mại, xây dựng thương hiệu và truyền thông cho các tập đoàn đa quốc gia. Cô nhận thấy mình may mắn khi được ở cương vị trao đi sự giúp đỡ. Cô phụ trách triển khai các dự án, dẫn dắt và động viên các tình nguyện viên tận dụng kiến thức và kỹ năng để mang lại giá trị thiết thực cho bệnh nhân.",
    //   description_en:"Possessing a wealth of experience in commerce, brand development, and communications for multinational corporations, Ms. Dung is grateful for the opportunity to make a positive impact on others. As Project Manager, she takes charge of executing projects, guiding, and motivating volunteers to harness their expertise and abilities to provide tangible benefits to patients.",
    //   showButton: false,
    //   imageSrc: MsDung
    // },
    // {
    //   subheading_vn:"Phương Nguyễn - Trưởng ban Đối ngoại",
    //   subheading_en:"Phuong Nguyen - External Affairs Manager",
    //   description_vn:"Cô có nhiều năm kinh nghiệm trong lĩnh vực thương mại quốc tế. Cô tin tưởng vào sự phát triển không ngừng của khoa học cũng như sự mầu nhiệm của cuộc sống. Cô hi vọng ALS Vietnam có thể hợp tác với các tổ chức ALS quốc tế, kết nối cộng đồng chuyên môn trong và ngoài nước để mang lại lợi ích cho bệnh nhân và cộng đồng người Việt sinh sống ở Việt Nam và nước ngoài.",
    //   description_en:"Drawing from her extensive experience in international trade, Ms. Phuong holds a strong conviction in the ceaseless advancement of science and the miracles of life. Her aspirations for ALS Vietnam include forging collaborative relationships with ALS organizations worldwide and cultivating a network of professional communities both locally and internationally. By doing so, she aims to bring benefits to ALS patients and the broader Vietnamese community, both domestically and overseas.",
    //   showButton: false,
    //   imageSrc: MsPhuong
    // },
    // {
    //   subheading_vn:"Ngọc Nguyễn - Trưởng ban Công nghệ",
    //   subheading_en:"Ngoc Nguyen - Technology Manager",
    //   description_vn:"Ngọc tốt nghiệp chương trình Kỹ sư tài năng Khoa học Kỹ thuật máy tính, Thạc sĩ Quản trị kinh doanh. Cô có hơn 15 năm kinh nghiệm làm việc về phát triển công nghệ, có kinh nghiệm xây dựng ứng dụng trên nền tảng web và mobile app (iOS/Android), đảm nhận nhiều vị trí then chốt và thành công trong nhiều dự án. Cô mong muốn chia sẻ kiến thức chuyên môn của mình để mang lại giá trị thiết thực cho bệnh nhân và ALS Vietnam. ",
    //   description_en:"Having completed the prestigious Talented Engineer Program in Computer Science and Engineering, Ms. Ngoc further expanded her skill set with a Master's in Business Administration. Boasting over 15 years of experience in technology development, she has refined her aptitude for devising web and mobile app platforms for both iOS and Android, while undertaking vital roles across a range of triumphant projects. Passionate about making a difference, Ms.Ngoc is keen on channeling her technical expertise to benefit patients and bolster the endeavors of ALS Vietnam.",
    //   showButton: false,
    //   imageSrc: MsNgoc
    // },
    // {
    //   subheading_vn:"Thi Nguyễn - Trưởng ban Hành chánh & Nhân sự",
    //   subheading_en:"Thi Nguyen - Administration & Human Resources Manager",
    //   description_vn:"Thi tốt nghiệp cử nhân ĐH Công nghệ. Cô vận động và tổ chức nhiều chương trình thiện nguyện như trao thực phẩm cho trung tâm trẻ mồ côi và người nghèo đường phố trong nhiều năm qua. Cô hiểu rằng việc giúp đỡ người khác trong cuộc chiến chống lại bệnh ALS không hề đơn giản, nó cần đến sức mạnh tổng hợp của nhiều cá nhân và các tổ chức vì một mục tiêu chung.  ",
    //   description_en:"Armed with a Bachelor's degree in Technology, Ms.Thi has devoted herself to organizing and participating in a multitude of charity initiatives, such as providing food assistance to orphanages and street-dwellers. She acknowledges that supporting others in their struggle against ALS is a complex task, one that calls for the collaborative efforts of numerous individuals and organizations, all united by a common goal.",
    //   showButton: false,
    //   imageSrc: MsThi
    // }
  ]
 
  const context = useContext(Context);
  const language = context.locale;
  return (
    
    <Container>
      <HeadingContainer>
        <TextContent>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </TextContent>
        <Subheadingcard style={{
         fontSize: "3em"
        }} >
          {language === "en"?"Management Board" :"Ban Điều Hành" }
        </Subheadingcard>
      </HeadingContainer>
    
      {
        ListManagement.map((list) => (
          <SpeMember
          subheading={
          <Subheadingcard>
           {language === "en"? list.subheading_en: list.subheading_vn}
          </Subheadingcard>
        }

        buttonRounded={false}
        primaryButtonText={language === "en"?"Read more":"Xem thêm"}
        showButton = {list.showButton}
        description={language === "en"?list.description_en:list.description_vn}
        imageSrc={list.imageSrc}
        
      />
        ))
      }
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
