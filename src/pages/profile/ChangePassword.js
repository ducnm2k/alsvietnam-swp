import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import logo from "images/logo.svg";

import { Alert, Button, Form, Input, Modal } from "antd";



import { useHistory } from "react-router-dom";
import { getToken, setDecode, setToken } from "helpers/Token";
import jwtDecode from "jwt-decode";
import { Context } from "components/Wrapper";
import UserAPI from "service/user_api";

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

export default ({
  logoLinkUrl = "/change-password",
  headingText = "Thay đổi mật khẩu tài khoản",
  forgotPasswordUrl = "/forgot-password",
}) => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
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

  const info = () => {
    Modal.info({
      title: 'Thay đổi mật khẩu',
      content: (
        <div>
          <p>Thay đổi mật khẩu thành công!</p>
        </div>
      ),
      onOk() {history.push("/manage-profile")},
    });
  };

  const submitUpdateProfile = async () => {
    try {
      const params = {
        username: user.username,
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      if (newPassword !== confirmPassword) {
        setError("Mật khẩu và xác nhận mật khẩu chưa đúng");
        setVisible(true);
      } else {
        const response = await UserAPI.changePassword(params);
        if (response.data.message.includes("password success")) {
          info();
        }
      }
    } catch (error) {
      setError(error.response.data.message);
      if (error.response.data.message.includes("not match")) {
        setError("Mật khẩu cũ không đúng");
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
                          Thay đổi mật khẩu thất bại! <br /> {error}
                        </div>
                      }
                      type="error"
                      showIcon
                    />
                  </div>
                ) : null}

                <Form name="basic"
                  onFinish={submitUpdateProfile}
                >
                  <div className="grid justify-items-center">
                    <Form.Item
                      name="oldPassword"
                      rules={[
                        {
                          required: "true",
                          message: "Vui lòng nhập mật khẫu cũ!"
                        },
                      ]}
                    >
                      <Input.Password
                        style={{ width: '24rem' }}
                        size="large"
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="Mật khẩu cũ"
                      />
                    </Form.Item>

                    <Form.Item
                      name="newPassword"
                      rules={[
                        {
                          required: "true",
                          message: "Vui lòng nhập mật khẩu mới!"
                        },
                      ]}
                    >
                      <Input.Password
                        style={{ width: '24rem' }}
                        size="large"
                        placeholder="Mật khẩu mới"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      name="confirmPassword"
                      rules={[
                        {
                          required: "true",
                          message: "Vui lòng nhập xác nhận mật khẩu!"
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
                        Thay đổi mật khẩu
                      </Button>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        onClick={() => history.push("/manage-profile")}
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
