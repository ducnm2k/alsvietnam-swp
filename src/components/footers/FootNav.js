import React, { useContext } from "react";
import tw from "twin.macro";
import LogoImage from "../../images/logo1.svg";
import LogoVN from "../../images/logo-vn.png";
import { FormattedMessage } from "react-intl";
import { Context } from "components/Wrapper";
const Container = tw.footer`relative bg-gray-200 grid grid-cols-4  gap-3 px-8 lg:py-8 py-8 mt-8`;
const Column = tw.div`md:flex md:justify-between sm:px-12 `;
const LinkList = tw.ul`text-sm font-normal`;
const LinkItem = tw.li`mt-0 pb-4`;
const LinkSocial = tw.a`border-b-2 border-transparent text-green-700 hocus:text-green-500 hocus:border-green-500 pb-1 transition duration-300`;
const Logo = tw.h3`lg:text-xl`;
const SubscribeContainer = tw.div`text-lg`;
const SubscribeText = tw.p`text-xs text-gray-800 text-justify leading-10`;

export default function FootNav() {
  const socialLink = [
    {
      title: <FormattedMessage id="headNav.home" defaultMessage="Home" />,
      link: "/",
    },
    {
      title: (
        <FormattedMessage id="headNav.about-us" defaultMessage="About Us" />
      ),
      link: "/about-us",
    },
    {
      title: (
        <FormattedMessage
          id="headNav.get-involved"
          defaultMessage="Get Involved"
        />
      ),
      link: "/get-involved",
    },
    {
      title: (
        <FormattedMessage
          id="headNav.understanding-ALS"
          defaultMessage="Understanding ALS"
        />
      ),
      link: "/understanding_ALS/ae9c363a-c164-4629-ba84-986f06513cc3",
    },
    {
      title: (
        <FormattedMessage
          id="headNav.navigating-ALS"
          defaultMessage="Navigating ALS"
        />
      ),
      link: "/navigating_ALS/f85441c4-8303-4716-b526-b6a06d14f37a",
    },
    {
      title: (
        <FormattedMessage
          id="headNav.healing-stories"
          defaultMessage="Healing Stories"
        />
      ),
      link: "/healing_stories/495a2b94-dcd9-4543-a2ef-5f24ae0f1cf8",
    },
    {
      title: <FormattedMessage id="headNav.donate" defaultMessage="donate" />,
      link: "/doantions",
    },
  ];
  const context = useContext(Context);
  return (
    <Container>
      <Column className="md:col-span-1 col-span-4">
        <Logo>
         {context.locale === 'en' ?  <img
            src={LogoImage}
            alt="ALS Vietnam"
            className="w-[8rem] md:w-[12rem]"
          /> :  <img
          src={LogoVN}
          alt="ALS Vietnam"
          className="w-[8rem] md:w-[12rem]"
        />}
          <br />

          <SubscribeText>
            Ho Chi Minh City, Vietnam <br />
            info.alsvietnam@gmail.com
          </SubscribeText>
        </Logo>
      </Column>
      <Column className="md:mt-24 md:col-span-1 col-span-4">
        <LinkList>
          <h5 className="font-bold mb-6 text-base">
            {" "}
            <FormattedMessage id="footer.quick" />
          </h5>
          {socialLink ? (
            socialLink.map((link) => (
              <LinkItem key={link.title}>
                <LinkSocial href={link.link}>{link.title}</LinkSocial>
              </LinkItem>
            ))
          ) : (
            <a>null</a>
          )}
        </LinkList>
      </Column>
      <Column className="col-span-4 md:col-span-2 md:mt-24 md:-ml-32">
        <SubscribeContainer>
          <h5 className="font-bold">
            {" "}
            <FormattedMessage
              id="home.Disclaimer.title"
              defaultMessage="Miễn trừ trách nhiệm"
            />
          </h5>
          <SubscribeText>
            <FormattedMessage
              id="home.Disclaimer"
              defaultMessage="Mong muốn lớn nhất của chúng tôi là nâng cao kiến thức 
            cộng đồng cũng như giúp bệnh nhân ALS và các bệnh thoái hóa thần kinh khác 
            tại Việt Nam có thêm thông tin hữu ích, hy vọng và có cái nhìn lạc quan hơn trong hành trình chữa lành. 
            Chúng tôi nỗ lực để cung cấp thông tin khách quan và chính xác để giúp họ có cuộc sống tốt đẹp hơn. 
            Chúng tôi kết nối và học hỏi từ những người chiến thắng ALS, giới chuyên gia cũng như đối chiếu các nghiên cứu 
            liên quan để cung cấp bằng chứng rằng các triệu chứng ALS có thể được đảo ngược hoặc làm chậm sự tiến triển của nó.
             Chúng tôi khuyến khích độc giả tìm hiểu thêm những giải pháp mới, các ý kiến từ nhiều nguồn tư liệu khác nhau và cởi mở 
             hơn với những giải pháp đúng đắn để quá trình chữa trị đạt được hiệu quả tốt nhất. 
             Tuy nhiên, chúng tôi không có thẩm quyền để chẩn đoán hay chữa trị căn bệnh này. 
             Vì vậy, bệnh nhân và người nhà nên tham khảo ý kiến của chuyên gia trước khi thực hiện một phương pháp điều trị mới."
            />
          </SubscribeText>
        </SubscribeContainer>
      </Column>
    </Container>
  );
}
