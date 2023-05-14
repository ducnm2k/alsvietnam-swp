import React, { useContext, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/login-illustration.svg";
import logo from "images/logo.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { Alert, Button, Form, Input, Modal } from "antd";
import { useHistory } from "react-router-dom";
import httpHelper from "helpers/httpHelper";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-24 mx-auto`;
const MainContent = tw.div`mt-4 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1`;

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
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Quên mật khẩu",
  // socialButtons = [
  //   {
  //     iconImageSrc: googleIconImageSrc,
  //     text: "Sign In With Google",
  //     url: "https://google.com"
  //   },
  // ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  loginUrl = "/login",
  signupUrl = "#",
}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [verifyCode, setVerifyCode] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const [resetPasswordError, setResetPasswordError] = useState(false);
  const [verifyError, setVerifyError] = useState();
  const [verifyCodeForm, setVerifyCodeForm] = useState(true);
  const [resetPasswordForm, setResetPasswordForm] = useState(false);

  const info = () => {
    Modal.info({
      title: 'Cập nhật mật khẩu',
      content: (
        <div>
          <p>Cập nhật lại mật khẩu thành công!</p>
        </div>
      ),
      onOk() {history.push("/login")},
    });
  };

  const submitVerifyCode = async () => {
    try {
      if (username === null || username === "") {
        setError("User name can't empty");
      } else {
        const response = await httpHelper.get(`/auth/forgot-password?username=${username}`);
        setVerifyCodeForm(false);
        setResetPasswordForm(true);
      }
    } catch (error) {
      setError("Tài khoản: " + username + " không đúng");
      setVerifyError(true);
    }
  };

  const submitResetPassword = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Mật khẩu và xác nhận mật khẩu chưa đúng");
        setResetPasswordError(true);
      } else {
        const response = await httpHelper.post('/auth/reset-password', {
          email,
          verifyCode,
          password,
          confirmPassword,
        });
        if (response.data?.status === 1) {
          info();
        }
      }
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      if (error.response.data.message.includes('not exist')) {
        setError("Email: " + email + " không đúng!");
      }
      if (error.response.data.message.includes('Invalid')) {
        setError("Mã code: " + verifyCode + " không đúng!");
      }
      if (error.response.data.message[0].includes('password length')) {
        setError("Mật khẩu dài từ 6 -> 50 ký tự!");
      }
      setResetPasswordError(true);
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
              {verifyCodeForm === true ? (
                <FormContainer>
                  {verifyError === true ? (
                    <div className="mb-8">
                      <Alert
                        message={
                          <div>
                            {error}
                          </div>
                        }
                        type="error"
                        showIcon
                      />
                    </div>
                  ) : null}
                  <Form name="basic" onFinish={submitVerifyCode}>
                    <div className="grid justify-items-center">
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: "true",
                            message: "Vui lòng nhập tên đăng nhập!"
                          },
                        ]}
                      >
                        <Input
                          style={{ width: '24rem' }}
                          size="large"
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Tên đăng nhập"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          htmlType="submit"
                          style={{
                            background: "#035C12",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          Gửi mã xác thực
                        </Button>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          onClick={() => history.push("/login")}
                          style={{
                            color: "#035C12",
                            fontWeight: "bold",
                            alignItems: "center"
                          }}
                        >
                          Quay lại
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </FormContainer>
              ) : null}

              {resetPasswordForm === true ? (
                <FormContainer>
                  {resetPasswordError === true ? (
                    <div className="mb-8">
                      <Alert
                        message={
                          <div>
                            Yêu cầu thất bại! {error}
                          </div>
                        }
                        type="error"
                        showIcon
                      />
                    </div>
                  ) : null}
                  <Form name="basic" onFinish={submitResetPassword}>
                    <div className="grid justify-items-center">
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: "true",
                            message: "Vui lòng nhập email!"
                          },
                          {
                            type: "email",
                            message: "Sai định dạng email",
                          },
                        ]}
                      >
                        <Input
                          style={{ width: '24rem' }}
                          size="large"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                      </Form.Item>

                      <Form.Item
                        name="verifyCode"
                        rules={[
                          {
                            required: "true",
                            message: "Vui lòng nhập mã xác thực!"
                          },
                        ]}
                      >
                        <Input
                          style={{ width: '24rem' }}
                          size="large"
                          type="number"
                          placeholder="Mã xác thực"
                          onChange={(e) => setVerifyCode(e.target.value)}
                        />
                      </Form.Item>

                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: "true",
                            message: "Vui lòng nhập mật khẩu!"
                          },
                        ]}
                      >
                        <Input.Password
                          style={{ width: '24rem' }}
                          size="large"
                          placeholder="Mật khẩu"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Item>

                      <Form.Item
                        name="confirmPassword"
                        rules={[
                          {
                            required: "true",
                            message: "Vui lòng nhập lại xác nhận mật khẩu!"
                          },
                        ]}
                      >
                        <Input.Password
                          style={{ width: '24rem' }}
                          size="large"
                          placeholder="Xác nhận mật khẩu"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          htmlType="submit"
                          style={{
                            background: "#035C12",
                            color: "white",
                            fontWeight: "bold",
                            alignItems: "center",
                          }}
                        >
                          Cập nhật mật khẩu
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
              ) : null}
            </MainContent>
          </MainContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
