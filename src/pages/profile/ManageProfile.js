import React, { useContext, useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import logo from "images/logo.svg";

import { useHistory } from "react-router-dom";
import { getToken, setDecode, setToken } from "helpers/Token";
import jwtDecode from "jwt-decode";
import UserAPI from "service/user_api";
import { Form, Input, Alert, Button, Modal } from "antd";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-24 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8 text-center`;

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

export default ({
  logoLinkUrl = "/manage-profile",
  headingText = "Cập nhật thông tin tài khoản",
  changePasswordUrl = "/change-password",
}) => {
  const [formUpdateProfile] = Form.useForm();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();
  const [user, setUser] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = getToken();
    const decode = jwtDecode(token);
    const user = await UserAPI.getUser(decode.id);
    setUser(user);
  }

  const noti = () => {
    Modal.info({
      title: 'Cập nhật thông tin tài khoản',
      content: (
        <div>
          <p>Cập nhật thông tin tài khoản thành công!</p>
        </div>
      ),
      onOk() { setIsEdit(false) },
    });
  };

  const submitUpdateProfile = async () => {
    try {
      if (isEdit) {
        const formProfile = new FormData();
        formProfile.append('username', user.username);
        formProfile.append('email', user.email);
        formProfile.append('firstName', firstName);
        formProfile.append('lastName', lastName);
        formProfile.append('status', user.status);
        formProfile.append('approveStatus', user.approveStatus);
        formProfile.append('status', user.status);
        await new Promise((resolve) => setTimeout(resolve, 500));
        const response = await UserAPI.updateProfile(formProfile);
        noti();
      } else {
        noti();
      }
    } catch (error) {
      setError(error.response.data.message);
      setVisible(true);
    }
  };

  useEffect(() => {
    formUpdateProfile.setFieldsValue({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      username: user?.username,
    });
  }, [user]);

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

              <Form form={formUpdateProfile} onFinish={submitUpdateProfile}>
                <div className="grid grid-cols-2 w-[40%]">
                  <div>
                    Họ*:
                  </div>
                  <div className="grid grid-rows-1">
                    <Form.Item
                      name='firstName'
                      rules={[
                        {
                          required: "true",
                          message: "Vui lòng nhập Họ!"
                        },
                      ]}
                    >
                      <Input
                        style={{ width: '24rem' }}
                        size="large"
                        onChange={(e) => { setFirstName(e.target.value); setIsEdit(true); }}
                        placeholder="Họ"
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="grid grid-cols-2 w-[40%]">
                  <div>
                    Tên*:
                  </div>
                  <div className="grid grid-rows-1">
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: "true",
                          message: "Vui lòng nhập Tên!"
                        },
                      ]}
                    >
                      <Input
                        style={{ width: '24rem' }}
                        size="large"
                        placeholder="Tên"
                        onChange={(e) => { setLastName(e.target.value); setIsEdit(true); }}
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="grid grid-cols-2 w-[40%]">
                  <div>
                    Username:
                  </div>
                  <div className="grid grid-rows-1">
                    <Form.Item
                      name="username"
                    >
                      <Input
                        disabled="true"
                        style={{ width: '24rem' }}
                        size="large"
                        placeholder="Username"
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="grid grid-cols-2 w-[40%]">
                  <div>
                    Email:
                  </div>
                  <div className="grid grid-rows-1">
                    <Form.Item
                      name="email"
                    >
                      <Input
                        disabled="true"
                        style={{ width: '24rem' }}
                        size="large"
                        placeholder="Email"
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="grid justify-items-center">
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
                      Cập nhật thông tin tài khoản
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      onClick={() => history.push("/home")}
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

              <p tw="mt-6 text-xs text-gray-600 text-center">
                <a
                  href={changePasswordUrl}
                  tw="border-b border-gray-500 border-dotted"
                >
                  Thay đổi mật khẩu
                </a>
              </p>
            </MainContent>
          </MainContainer>
        </Content>
      </Container >
    </AnimationRevealPage >
  );
};
