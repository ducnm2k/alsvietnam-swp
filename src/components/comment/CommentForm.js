import React, { useContext, useEffect, useState } from "react";
import CommentAPI from "service/comment_api";
import { HeartTwoTone, EllipsisOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Menu, Modal, Radio, Space } from "antd";
import userImage from "images/user.png";
import tw from "twin.macro";
import { getToken, removeToken, setToken } from "helpers/Token";
import jwtDecode from "jwt-decode";
import UserAPI from "service/user_api";
import { FormattedMessage } from "react-intl";
import { Context } from "components/Wrapper";

import { FacebookShareButton } from "react-share";
import { CloudDownloadOutlined, FacebookOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

import { useHistory } from "react-router-dom";

const RowComment = tw.div`grid grid-cols-3 gap-4 ml-8`;
const ListComment = tw.div`col-span-4 md:col-span-3   items-center mx-auto`;
const CommentEditor = tw.div`col-span-4 md:col-span-3  md:w-7/12  items-center md:mx-auto`;
const User = tw.div`flex text-base md:text-lg font-bold`;
const Content = tw.div`text-sm md:text-base mt-4`;
function CommentForm({ articleId }) {
  const context = useContext(Context);
  const language = context.locale;
  const [listComment, setListComment] = useState([]);
  const [comment, setComment] = useState();
  const [user, setUser] = useState();
  const [pageSize, setPageSize] = useState(5);
  const [formComment] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentId, setCommentId] = useState();
  const [flagContent, setFlagContent] = useState();
  const [likeNumber, setLikeNumber] = useState();
  const [userId, setUserId] = useState();

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    getListComment();
    getArticleLike();
  }, [articleId, pageSize]);
  const getListComment = async () => {
    const response = await CommentAPI.getListComment(articleId, pageSize);
    setListComment(response.data);
  };
  const getArticleLike = async () => {
    const response = await CommentAPI.getLikeArticleById(articleId);
    setLikeNumber(response.likeNumber);
    setUserId(response.userId);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const success = () => {
    Modal.success({
      content: `${
        context.locale === "en"
          ? "Your report is successful!"
          : "Báo cáo của bạn đã được ghi nhận!"
      }`,
    });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const logout = () => {
    window.location.reload();
    removeToken();
  };

  const manageProfile = () => {
    history.push("/manage-profile");
  };

  const item_user = (
    <Menu style={{ width: "10rem" }}>
      <Menu.Item key={1}>
        <Button type="text" onClick={logout}>
          Logout
        </Button>
      </Menu.Item>
      <Menu.Item key={2}>
        <Button type="text" onClick={manageProfile}>
          Manage Profile
        </Button>
      </Menu.Item>
    </Menu>
  );
  const token = getToken();
  useEffect(() => {
    const getUser = async () => {
      if (token != null) {
        const response = await UserAPI.getUser(jwtDecode(token).id);
        setUser(response);
      }
    };
    getUser();
  }, []);
  const handlePost = async () => {
    const params = {
      articleId: articleId,
      content: comment,
    };
    await CommentAPI.createComment(params);
    getListComment();
    formComment.resetFields();
  };
  const handleLoadmore = () => {
    setPageSize(pageSize + 5);
  };
  const handleDeleteComment = async () => {
    await CommentAPI.deleteComment(commentId);
    getListComment();
  };
  const itemsReport = (
    <Menu>
      <Menu.Item key={1} onClick={showModal}>
        Report
      </Menu.Item>
    </Menu>
  );

  const itemsDelete = (
    <Menu>
      <Menu.Item onClick={handleDeleteComment}>Delete</Menu.Item>
    </Menu>
  );

  const likeComment = async (commentId) => {
    await CommentAPI.likeComment(commentId);
    getListComment();
  };

  const unlikeComment = async (commentId) => {
    await CommentAPI.unlikeComment(commentId);
    getListComment();
  };

  const likeArticle = async (articleId) => {
    await CommentAPI.likeArticle(articleId);
    getArticleLike();
  };

  const unlikeArticle = async (articleId) => {
    await CommentAPI.unlikeArticle(articleId);
    getArticleLike();
  };

  const handleReport = async () => {
    try {
      const params = {
        id: commentId,
        flagContent: flagContent,
      };
      await CommentAPI.reportComment(params);
      success();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <RowComment>
        <CommentEditor>
          {token !== null ? (
            <>
              {userId === null ? (
                <Button
                  type="text"
                  style={{
                    background: "#eb2f96",
                    color: "white",
                    padding: "0 1rem 0",
                    borderRadius: "1rem",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    width: "20%",
                    margin: "1rem",
                  }}
                  onClick={(e) => {
                    likeArticle(articleId);
                  }}
                  size="large"
                >
                  <HeartTwoTone twoToneColor="#eb2f96" />
                  {likeNumber} {context.locale === "en" ? "Like" : "Thích"}
                </Button>
              ) : (
                <Button
                  type="text"
                  style={{
                    background: "#eb2f96",
                    color: "white",
                    padding: "0 1rem 0",
                    borderRadius: "1rem",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    width: "25%",
                    margin: "1rem",
                  }}
                  onClick={(e) => {
                    unlikeArticle(articleId);
                  }}
                  size="large"
                >
                  <HeartTwoTone twoToneColor="#eb2f96" />
                  {likeNumber} {context.locale === "en" ? "Unlike" : "Bỏ Thích"}
                </Button>
              )}
              <Button
                type="text"
                style={{
                  background: "#4267b2",
                  color: "white",
                  padding: "0 1rem 0",
                  borderRadius: "1rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: "20%",
                  margin: "1rem",
                }}
                size="large"
              >
                <FacebookShareButton
                  url={`https://alsvietnam.org/${location.pathname}`}
                  hashtag={"#alsvietnam"}
                >
                  <FacebookOutlined />{" "}
                  {context.locale === "en" ? "Share" : "Chia sẻ"}
                </FacebookShareButton>
              </Button>

              <Form form={formComment} onFinish={handlePost}>
                <Dropdown overlay={item_user}>
                  <User>{user?.firstName + " " + user?.lastName}</User>
                </Dropdown>
                {language === "en" ? (
                  <Form.Item
                    name="comment"
                    rules={[
                      {
                        required: "true",
                        message: "Please input comment content!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      name="comment"
                      placeholder="Write your comment..."
                      rows={4}
                      style={{ background: "#fbfbfb", borderRadius: "1rem" }}
                      size="large"
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Form.Item>
                ) : (
                  <Form.Item
                    name="comment"
                    rules={[
                      {
                        required: "true",
                        message: "Vui lòng nhập nội dung bình luận!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      name="comment"
                      placeholder="Viết bình luận của bạn..."
                      rows={4}
                      style={{ background: "#fbfbfb", borderRadius: "1rem" }}
                      size="large"
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Form.Item>
                )}
                <Form.Item>
                  <button
                    className="float-right text-[#035C12] font-bold border border-[#035C12] px-4 py-2 rounded text-base bg-[#035C12] text-white  duration-500"
                    htmlType="submit"
                  >
                    <FormattedMessage id="comment.button" />
                  </button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <>
              <div className="text-[#eb2f96] text-base">
                {" "}
                <HeartTwoTone twoToneColor="#eb2f96" />
                {likeNumber} {context.locale === "en" ? "Like" : "Thích"}
              </div>
              {language === "en" ? (
                <User>
                  Please
                  <a href="/login" className="text-[#035C12] ml-2 mr-2">
                    {" "}
                    login{" "}
                  </a>{" "}
                  to reactive
                </User>
              ) : (
                <User>
                  Vui lòng{" "}
                  <a href="/login" className="text-[#035C12] ml-2 mr-2">
                    {" "}
                    đăng nhập{" "}
                  </a>{" "}
                  để tương tác
                </User>
              )}
            </>
          )}
        </CommentEditor>

        <ListComment>
          {listComment?.map((comment) => (
            <div className="bg-[#fbfbfb] px-8 py-8 border-1 rounded-[1rem] mb-8">
              <User key={comment.id}>
                <img src={userImage} className="h-10 w-10 mr-4" />
                {comment.userProfile.firstName +
                  " " +
                  comment.userProfile.lastName}
                <h1 className="grow font-light ml-4 text-gray-400 text-sm md:text-base">
                  {new Intl.DateTimeFormat("vi-VN", {
                    year: "numeric",
                    day: "2-digit",
                    month: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(comment.createdAt)}
                </h1>
                {token !== null ? (
                  <div className="flex-none w-10">
                    {comment?.userProfile.id == user?.id ? (
                      <Dropdown
                        overlay={itemsDelete}
                        key={comment?.id}
                        onClick={(e) => {
                          setCommentId(comment?.id);
                        }}
                      >
                        <Button
                          icon={<EllipsisOutlined />}
                          type="text"
                          style={{ fontSize: "2rem" }}
                        />
                      </Dropdown>
                    ) : (
                      <Dropdown
                        overlay={itemsReport}
                        key={comment?.id}
                        onClick={(e) => {
                          setCommentId(comment?.id);
                        }}
                      >
                        <Button
                          icon={<EllipsisOutlined />}
                          type="text"
                          style={{ fontSize: "2rem" }}
                        />
                      </Dropdown>
                    )}
                  </div>
                ) : null}
              </User>
              <Content>{comment?.content}</Content>
              <Content>
                <>
                  {token === null ? (
                    <div className="text-[#eb2f96]">
                      {" "}
                      <HeartTwoTone twoToneColor="#eb2f96" />
                      {comment?.likeNumber}{" "}
                      {context.locale === "en" ? "Like" : "Thích"}
                    </div>
                  ) : (
                    <>
                      {comment?.userId !== null ? (
                        <Button
                          type="text"
                          style={{ color: "#eb2f96" }}
                          onClick={(e) => {
                            unlikeComment(comment?.id);
                          }}
                        >
                          <HeartTwoTone twoToneColor="#eb2f96" />
                          {comment?.likeNumber}{" "}
                          {context.locale === "en" ? "Unlike" : "Bỏ Thích"}
                        </Button>
                      ) : (
                        <Button
                          type="text"
                          style={{ color: "#eb2f96" }}
                          onClick={(e) => {
                            likeComment(comment?.id);
                          }}
                        >
                          <HeartTwoTone twoToneColor="#eb2f96" />
                          {comment?.likeNumber}{" "}
                          {context.locale === "en" ? "Like" : "Thích"}
                        </Button>
                      )}
                    </>
                  )}
                </>
              </Content>
            </div>
          ))}

          {listComment.length !== 0 ? (
            <div className="grid justify-items-center">
              <button
                className=" text-[#035C12] font-bold border border-[#035C12] px-4 py-2 rounded text-base bg-white"
                onClick={handleLoadmore}
              >
                <FormattedMessage id="comment.loadMore" />
              </button>
            </div>
          ) : null}
        </ListComment>
      </RowComment>
      {/* modal report comment */}
      <Modal
        title={
          context.locale === "en" ? "Report comment?" : "Báo cáo bình luận?"
        }
        open={isModalOpen}
        onOk={handleReport}
        onCancel={handleCancel}
        width={400}
        footer={[
          <Button key="back" onClick={handleCancel}>
            {context.locale === "en" ? "Cancel" : "Huỷ"}
          </Button>,
          <Button
            key="submit"
            onClick={handleReport}
            style={{ background: "green", color:'white', fontWeight:'bold' }}
          >
            {context.locale === "en" ? "Send" :"Gửi"}
          </Button>,
        ]}
      >
        <div className="md:px-12">
          <h1 className="italic">
            {context.locale === "en"
              ? "Please select your problem:"
              : "Hãy chọn vấn đề:"}
          </h1>
          <Radio.Group onChange={(e) => setFlagContent(e.target.value)}>
            <Space direction="vertical">
              <Radio value={"spam"}>Spam</Radio>
              <Radio value={"violence"}>
                {context.locale === "en" ? "Violence" : "Bạo lực"}
              </Radio>
              <Radio value={"hate speech"}>
                {context.locale === "en"
                  ? "Hate speech"
                  : "Ngôn từ gây thù ghét"}
              </Radio>
              <Radio value={"false information"}>
                {context.locale === "en"
                  ? "False information"
                  : "Thông tin sai sự thật"}
              </Radio>
            </Space>
          </Radio.Group>
        </div>
      </Modal>
    </div>
  );
}

export default CommentForm;
