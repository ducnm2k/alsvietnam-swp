import { Button, Card, Form, Input, Modal } from "antd";
import FootNav from "components/footers/FootNav";
import HeadNav from "components/hero/HeadNav";
import TitleNav from "components/hero/TitleNav";
import { Context } from "components/Wrapper";
import { getToken } from "helpers/Token";
import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";

import BackgroundTitle from "../../images/title.jpg";
import ShareImage from "../../images/story.jpg";
import StoryAPI from "service/share_story_api";
import UserAPI from "service/user_api";
function ShareStory(props) {
  const token = getToken();

  const context = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [decode, setDecode] = useState();
  const [user, setUser] = useState();
  const submit = async () => {
    const param = {
      title: title,
      content: content,
      link: link,
      userId: decode.id,
    };
    try {
      await StoryAPI.createStory(param);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      setDecode(jwtDecode(token));
    }
  }, []);
  useEffect(() => {
    const getUser = async () => {
      if (decode != null) {
        const response = await UserAPI.getUser(decode.id);
        setUser(response);
      }
    };
    getUser();
  }, [decode]);
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
    <div className="font-[Montserrat]">
      <div className="mx-8">
        <HeadNav />
        <TitleNav
          pageTitleString={
            context.locale === "en" ? "Share Story" : "Chia sẻ câu chuyện"
          }
        />
        <div className="  md:px-32 ">
          <div className=" px-8 py-4 md:px-32 md:py-12">
            {token ? (
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-3 md:col-span-1">
                  <img src={ShareImage} />
                </div>
                <div className="col-span-3 md:col-span-2 backdrop-opacity-10 backdrop-invert bg-white/90 md:py-16 md:px-16">
                  <h1 className="text-base font-semibold mb-8">
                    {context.locale === "en"
                      ? `Hi ${
                          user?.firstName + " " + user?.lastName
                        }, let us hear your story...`
                      : `Xin chào ${
                          user?.firstName + " " + user?.lastName
                        }, hãy để chúng tôi lắng nghe câu chuyện của bạn...`}
                  </h1>
                  <Form onFinish={submit}>
                    <Form.Item
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: `${
                            context.locale === "en"
                              ? "Title is required!"
                              : "Vui lòng nhập tựa đề!"
                          }`,
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={
                          context.locale === "en"
                            ? "Your story's title..."
                            : "Tựa đề câu chuyện..."
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      name="content"
                      rules={[
                        {
                          required: true,
                          message: `${
                            context.locale === "en"
                              ? "Content is required!"
                              : "Vui lòng nhập nội dung!"
                          }`,
                        },
                      ]}
                    >
                      <Input.TextArea
                        size="large"
                        onChange={(e) => setContent(e.target.value)}
                        autoSize={{ minRows: 6, maxRows: 15 }}
                        placeholder={
                          context.locale === "en"
                            ? "Your story's content..."
                            : "Nội dung câu chuyện..."
                        }
                      />
                    </Form.Item>
                    <Form.Item>
                      <Input
                        size="large"
                        onChange={(e) => setLink(e.target.value)}
                        placeholder={
                          context.locale === "en"
                            ? "Attach link..."
                            : "Link đính kèm..."
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
                </div>
              </div>
            ) : (
              <>
                {context.locale === "en" ? (
                  <div className=" text-base md:text-lg font-bold">
                    <a href="/login" className="text-[#035C12] ml-2">Log in</a> to share your story...
                  </div>
                ) : (
                  <div className=" text-base md:text-lg font-bold">
                    <a href="/login" className="text-[#035C12] ml-2">Đăng nhập</a> để chia sẻ câu chuyện của bản
                    thân...
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <FootNav />
      <Modal
        footer={null}
        onCancel={handleCancel}
        onOk={handleOk}
        open={isModalOpen}
        title={
          context.locale === "en"
            ? "Thanks for your story! "
            : "Cám ơn bạn đã chia sẻ câu chuyện!"
        }
      />
    </div>
  );
}

export default ShareStory;
