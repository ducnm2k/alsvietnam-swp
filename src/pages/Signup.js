import React, { useContext, useEffect, useState } from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { Alert, Button, Form, Input } from "antd";
import UserAPI from "service/user_api";
import { useHistory } from "react-router-dom";
import { Context } from "components/Wrapper";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-24 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-xl xl:text-2xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div` border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

// const Form = tw.form`mx-auto max-w-xs`;
// const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "/home",
  illustrationImageSrc = illustration,
  headingText = "Đăng kí thành viên ALS Việt Nam",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "#",
}) => {
  const context = useContext(Context);
  const history = useHistory();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const [hidden, setHidden] = useState(true);
  const [idMember, setIdMember] = useState();
  const navigate = useHistory();
  useEffect(() => {
    const getIdMember = async () => {
      const response = await UserAPI.getIdMember();
      setIdMember(response[0]?.id);
    };
    getIdMember();
  }, []);
  const submitSignup = async () => {
    const params = {
      username: username,
      email: email,
      firstName: firstname,
      lastName: lastname,
      status: false,
      approveStatus: true,
      password: password,
      role: idMember,
    };
    try {
      if (password !== confirmPassword) {
        setError("Mật khẩu và xác nhận mật khẩu chưa đúng");
        setHidden(false);
      } else {
        const response = await UserAPI.signUp(params);
        await UserAPI.resendMail(response.id);
        navigate.push(`/verify/${response.id}`);
      }
    } catch (error) {
      console.log(error);
      setError(error.response?.data.message);
      if (error.response?.data.message.includes(email + ' already exists')) {
        setError("Email: " + email + " đã tồn tại");
      }
      if (error.response?.data.message.includes(username + ' already exists')) {
        setError("Tài khoản: " + username + " đã tồn tại");
      }
      if (error.response?.data.message[0].includes('Password minimum')) {
        setError("Mật khẩu dài từ 6 -> 50 ký tự!");
      }
      setHidden(false);
    }
  };

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>

                <p className="text-center font-semibold">Thông tin tài khoản</p>
                {hidden === true ? null : (
                  <div className="mb-8">
                    <Alert type="error" message={error} banner />
                  </div>
                )}
                {/* <Form>
                  <Input
                    required
                    type="firstname"
                    placeholder="Họ"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <Input
                    required
                    type="lastname"
                    placeholder="Tên"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <Input
                    required
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    required
                    type="username"
                    placeholder="Tên tài khoản"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    minLength={6}
                    required
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                 
                    onClick={submitSignup}
                    className="mt-5 w-full"
                    style={{
                      background: "#035C12",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Đăng kí
                  </Button>
                
               
                <p tw="mt-8 text-sm text-gray-600 text-center">
               
                  <a href='/login' tw="border-b border-gray-500 border-dotted">
                    Đăng nhập
                  </a>
                </p> 
                </Form> */}
                <Form onFinish={submitSignup}>
                  <Form.Item name="firstname" rules={[
                    {
                      required: "true",
                      message: ` ${context.language === "en"
                        ? "Please input firstname!"
                        : "Vui lòng nhập họ!"
                        }`,
                    },
                  ]} >
                    <Input onChange={(e) => setFirstname(e.target.value)} placeholder="Họ" />
                  </Form.Item>
                  <Form.Item name="lastname" rules={[
                    {
                      required: "true",
                      message: ` ${context.language === "en"
                        ? "Please input lastname!"
                        : "Vui lòng nhập tên!"
                        }`,
                    },
                  ]} >
                    <Input onChange={(e) => setLastname(e.target.value)} placeholder="Tên" />
                  </Form.Item>
                  <Form.Item name="email" rules={[
                    {
                      required: "true",
                      message: ` ${context.language === "en"
                        ? "Please input email!"
                        : "Vui lòng nhập Email!"
                        }`,
                    },
                    {
                      type: "email",
                      message: "Sai định dạng email",
                    },
                  ]}>
                    <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  </Form.Item>
                  <Form.Item name="username" rules={[
                    {
                      required: "true",
                      message: ` ${context.language === "en"
                        ? "Please input Username!"
                        : "Vui lòng nhập tên đăng nhập!"
                        }`,
                    },
                  ]}>
                    <Input onChange={(e) => setUsername(e.target.value)} placeholder="Tên đăng nhập" />
                  </Form.Item>
                  <Form.Item name="password" rules={[
                    {
                      required: "true",
                      message: ` ${context.language === "en"
                        ? "Please input password!"
                        : "Vui lòng nhập mật khẩu!"
                        }`,
                    },
                  ]}>
                    <Input.Password onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" />
                  </Form.Item>
                  <Form.Item name="confirmPassword" rules={[
                    {
                      required: "true",
                      message: ` ${context.language === "en"
                        ? "Please input password!"
                        : "Vui lòng nhập xác nhận mật khẩu!"
                        }`,
                    },
                  ]}>
                    <Input.Password onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Xác nhận mật khẩu" />
                  </Form.Item>
                  <div className="grid justify-items-center">
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        style={{
                          background: "#035C12",
                          color: "white",
                          fontWeight: "bold",
                        }}>
                        Đăng ký
                      </Button>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        onClick={() => history.push("/login")}
                        style={{
                          color: "#035C12",
                          fontWeight: "bold",
                          alignItems: "center",
                        }}
                      >
                        Quay lại
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>

        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
