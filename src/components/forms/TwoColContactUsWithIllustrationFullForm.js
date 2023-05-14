import React, { useContext, useEffect, useState } from "react";

import {
  Button,
  Select,
  DatePicker,
  Checkbox,
  Divider,
  Modal,
  Input,
  Alert,
  Form,
  InputNumber,
} from "antd";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/947-9472283_join-us-illustration.png";
import { ContentWithPaddingXl } from "../misc/Layouts";
import { FormattedMessage } from "react-intl";
import DonateAPI from "../../service/donate_api";
import InvolvedAPI from "../../service/involve_api";
import { Context } from "../Wrapper";
import UserAPI from "service/user_api";
import { useHistory } from "react-router-dom";
import Randomstring from "randomstring";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left `;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base font-medium leading-relaxed text-secondary-100`;
const Title = tw.h5`text-lg font-semibold text-gray-900 mt-4 md:mt-8`;

// const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-xl mx-auto md:mx-0`

const Text = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24 mt-8 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-green-500`}
`;

const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24 mt-8 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-green-500`}
`;

const SubmitButton = styled(Button)`
  ${tw`cursor-pointer px-4 py-2 font-bold rounded text-center text-lg md:text-base lg:text-2xl bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 inline-block mt-8`}
`;

export default ({
  subheading = "Contact Us",
  heading = <>Get Involved</>,
  description = "",
  submitButtonText = "Send",
  formAction = "#",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState(Randomstring.generate(7));
  const [password, setPassword] = useState(Randomstring.generate(7));

  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const [major, setMajor] = useState();
  const [mess, setMess] = useState();
  const [fbLink, setfbLink] = useState();
  const [idRole, setIdRole] = useState();
  const [formRequest] = Form.useForm();
  const [error, setError] = useState();
  const history = useHistory();
  useEffect(() => {
    const getIdRole = async () => {
      const response = await UserAPI.getIdVolunteer();
      setIdRole(response[0]?.id);
    };
    getIdRole();
  }, []);
  const submitForm = async () => {
    try {
      const form = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        major: major,
        password: password,
        status: false,
        approveStatus: false,
        description: mess,
        socialLink: fbLink,
        role: idRole,
      };
      const response = await InvolvedAPI.createRequest(form);
      localStorage.setItem("volunteer", true);
      history.push(`/verify/${response.id}`);
      setIsModalOpen(true);
    } catch (error) {
      setError(error.response.data.message);
      console.log("Error:", error);
    }
  };
  const context = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload();
  };
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>

        <TextColumn textOnLeft={textOnLeft}>
          <div>
            <TextContent>
              <Heading>
                {context.locale === "en" ? "Get Involved" : "Đăng ký tham gia"}
              </Heading>

              <div className="grid justify-items-center">
                {error ? (
                  <Alert
                    style={{ textAlign: "center" }}
                    message={<p className="text-base font-bold">{error}</p>}
                    type="error"
                  />
                ) : null}
              </div>
              {description && <Description>{description}</Description>}

              <Form onFinish={submitForm}>
                <Title>
                  <FormattedMessage id="joinUs.titleInforGeneral" />
                </Title>
                <div className="grid grid-cols-2 gap-8">
                  <Form.Item
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: `${
                          context.locale === "en"
                            ? "Please input your firstname!"
                            : "Vui lòng nhập họ!"
                        }`,
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder={
                        context.locale === "en" ? "First Name" : "Họ"
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: `${
                          context.locale === "en"
                            ? "Please input your lastname!"
                            : "Vui lòng nhập tên!"
                        }`,
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      type="text"
                      name="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder={
                        context.locale === "en" ? "Last Name" : "Tên"
                      }
                    />
                  </Form.Item>
                </div>
                {/* <div className="grid grid-cols-2  gap-8">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: `${
                          context.locale === "en"
                            ? "Please input your username!"
                            : "Vui lòng nhập tên đăng nhập!"
                        }`,
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      name="userName"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={
                        context.locale === "en" ? "Username" : "Tên đăng nhập"
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: `${
                          context.locale === "en"
                            ? "Please input your password!"
                            : "Vui lòng nhập mật khẩu!"
                        }`,
                      },
                      {
                        min: 6,
                        message: `${
                          context.locale === "en"
                            ? "Min lenght is 6 character!"
                            : "Độ dài mật khẩu ít nhất 6 kí tự!"
                        }`,
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={
                        context.locale === "en" ? "Password" : "Mật khẩu"
                      }
                    />
                  </Form.Item>
                </div> */}
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: `${
                        context.locale === "en"
                          ? "Please input your phone email!"
                          : "Vui lòng nhập email!"
                      }`,
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: `${
                        context.locale === "en"
                          ? "Please input your phone number!"
                          : "Vui lòng nhập số điện thoại!"
                      }`,
                    },
                    {
                      max: 10,
                      message: `${
                        context.locale === "en"
                          ? "Must be 10 numbers!"
                          : "Gồm 10 số!"
                      }`,
                    },
                  ]}
                >
                  <Input
                    maxLength={10}
                    type="number"
                    style={{ width: "100%" }}
                    size="large"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={
                      context.locale === "en" ? "Phone number" : "Số điện thoại"
                    }
                  />
                </Form.Item>
                <Title>
                  <FormattedMessage id="joinUs.titleInforVolunteer" />
                </Title>
                <Form.Item>
                  <Input
                    size="large"
                    name="major"
                    onChange={(e) => setMajor(e.target.value)}
                    placeholder={context.locale === "en" ? "Skills" : "Chuyên môn"}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    size="large"
                    name="socialLink"
                    onChange={(e) => setfbLink(e.target.value)}
                    placeholder={"Facebook link"}
                  />
                </Form.Item>
                <Form.Item>
                  <Input.TextArea
                    rows={3}
                    size="large"
                    name="description"
                    onChange={(e) => setMess(e.target.value)}
                    placeholder={
                      context.locale === "en"
                        ? "Any special message you need us to know.."
                        : "Bạn có muốn gửi gắm gì đến ALS..."
                    }
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    size="large"
                    style={{
                      background: "green",
                      color: "white",
                      fontWeight: "bold",
                      float: "right",
                    }}
                    htmlType="submit"
                  >
                    {context.locale === "en" ? "Send" : "Gửi"}
                  </Button>
                </Form.Item>
              </Form>
            </TextContent>
          </div>
        </TextColumn>
      </TwoColumn>
      <Modal
        footer={null}
        onCancel={handleCancel}
        onOk={handleOk}
        open={isModalOpen}
        title={
          context.locale === "en"
            ? "Thanks for your get involved "
            : "Cám ơn bạn đã đăng kí tham gia"
        }
      >
        {context.locale === "en"
          ? `We will respond you in the shortest time through email ${email}`
          : `Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất qua email đã đăng kí ${email}`}
      </Modal>
    </Container>
  );
};
