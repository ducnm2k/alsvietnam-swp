import React, { useContext, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import loginImage from "images/login.jpg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

import { Alert, Button, Form, Input } from "antd";



import { useHistory } from "react-router-dom";
import httpHelper from "helpers/httpHelper";
import { setDecode, setToken } from "helpers/Token";
import jwtDecode from "jwt-decode";
import { Context } from "components/Wrapper";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-24 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
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

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
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
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-green-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "/home",
  illustrationImageSrc = illustration,
  headingText = "Đăng nhập ALS Việt Nam",
  // socialButtons = [
  //   {
  //     iconImageSrc: googleIconImageSrc,
  //     text: "Sign In With Google",
  //     url: "https://google.com"
  //   },
  // ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "/forgot-password",
  signupUrl = "#",
}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const [user, setUser] = useState();
  const [visible, setVisible] = useState(false);
  const [visibleVerifyLink, setVisibleVerifyLink] = useState(false);

  const context = useContext(Context);

  const [passwordVisible, setPasswordVisible] = useState();
  const [typePassword, setTypePassword] = useState("password");

  const changeType = (e) => {
    if (e.target.checked === true) {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  }


  const submitLogin = async () => {
    try {
      const response = await httpHelper.post("/auth/login", {
        username,
        password,
      });
      if (response.access_token) {
        if (jwtDecode(response.access_token)?.role === "ROLE_MEMBER") {
          setToken(response.access_token);
          history.push("/home");
        } else {
          setError("Tài khoản không hợp lệ!");
          setVisible(true);
        }
      } else if (response.data.status === 0 || response.data.status === 2) {
        setError(response.data.message);
        setVisible(true);
      } else if (response.data.status === 1) {
        history.push(`/verify/${response.data.data}`);
      }
    } catch (error) {
      if (error.response.data.message == "Invalid username or password") {
        setError("Tài khoản và mật khẩu không hợp lệ!");
      } else {
        setError(error.response.data.message);
      }
      setVisible(true);
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
              
                {visible === true ? (
                  <div className="mb-8">
                    <Alert
                      message={
                        <div>
                          Đăng nhập thất bại! <br /> {error}
                        </div>
                      }
                      type="error"
                      showIcon
                    />
                  </div>
                ) : null}
                {visibleVerifyLink === true ? (
                  <div className="mb-8">
                    <Alert
                      message={
                        <a href={`/verify/${user}`}>
                          Click here to verify your account
                        </a>
                      }
                      type="info"
                      showIcon
                    />
                  </div>
                ) : null}

             

                <Form name="basic" onFinish={submitLogin}>
                  <div className="grid justify-items-center">
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: "true",
                          message: ` ${
                            context.language === "en"
                              ? "Please input Username!"
                              : "Vui lòng nhập tên đăng nhập!"
                          }`,
                        },
                      ]}
                    >
                      <Input
                           style={{width:'24rem'}}
                        size="large"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={`${
                          context.language === "en"
                            ? "Username"
                            : "Tên đăng nhập"
                        }`}
                      />
                    </Form.Item>
                    <Form.Item
                     
                      name="password"
                      rules={[
                        {
                          required: "true",
                          message: ` ${
                            context.language === "en"
                              ? "Please input Password!"
                              : "Vui lòng nhập mật khẩu!"
                          }`,
                        },
                    
                      ]}
                    >
                      <Input.Password
                     style={{width:'24rem'}}
                        size="large"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={`${
                          context.language === "en" ? "Password" : "Mật khẩu"
                        }`}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        // onClick={submitLogin}
                        style={{
                          background: "#035C12",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {context.language === "en" ? "Login" : "Đăng nhập"}
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a
                    href={forgotPasswordUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Quên mật khẩu?
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
               
                  <a
                    href={"/signup"}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Tạo tài khoản mới
                  </a>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
