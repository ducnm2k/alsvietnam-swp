import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { paramCase, capitalCase } from "change-case";
import tw from "twin.macro";
import { motion } from "framer-motion";
import SocialFollow from "components/hero/SocialFollow";
import Kim from "../../images/healingstories/Kim.png";
import { FormattedMessage } from "react-intl";

import { Button, Divider } from "antd";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import NoResult from "pages/result/NoResult";
import { Context } from "components/Wrapper";
import BlogPostApi from "service/blog_post_api";
import { ShareAltOutlined } from "@ant-design/icons";
const Content = tw.div` mt-0 pb-8`;
const Post = tw.div`col-span-4 md:col-span-2`;
const Card = tw.div`relative grid sm:grid-cols-3 gap-4 md:px-8  mt-32 md:mt-2 col-span-4 md:col-span-2`;
const Column = tw.div`md:flex md:justify-between`;
const Sider = tw.div`col-span-4 md:col-span-1`;
const SideNav = tw.div`px-8 py-8 mt-8`;
const ListPopularPost = tw.div`text-sm justify-start`;
const ListRecentPost = styled.li`
  margin-bottom: 0.75rem;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #2f855a;
    text-decoration-style: solid;
  }
`;

const LinkRecentPost = tw(
  motion.a
)`block sm:max-w-2xl cursor-pointer mb-4 last:mb-0 sm:mb-0`;
const Title = tw.h5`text-base md:text-xl font-bold text-gray-900 hover:text-green-700 leading-8`;
const Author = tw.h2`text-sm text-gray-600 italic`;
const Heading = tw.h1`text-base  font-bold tracking-wide`;
const Description = tw.h2`text-xs md:text-base font-normal leading-loose text-justify`;
const Logo = tw.h1`transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-2 md:mt-0`;
const Row = tw.div`grid grid-cols-3  gap-8 `;
export default function PostDetail({ listPopularPost, listRecentPost }) {
  const context = useContext(Context);
  const language = context.locale;
  const location = useLocation();
  const pathSnippet = location.pathname.split("/");
  const id = useParams();
  const [idBlog, setIdBlog] = useState("");
  useEffect(() => {
    if (pathSnippet[1] === "als-blog") {
      const getIdBlog = async () => {
        const response = await BlogPostApi.searchtopicbyname("als blogs");
        setIdBlog(response.data[0]?.id);
      };
      getIdBlog();
    }
  }, []);
  const getPostContent = (post) => {
    let titleEN = "",
      descriptionEN = "",
      titleVN = "",
      descriptionVN = "";
    post.articleContents?.map((p) =>
      p.language != "EN"
        ? {
            titleVN: (titleVN = p.title),
            descriptionVN: (descriptionVN = p.description),
          }
        : {
            titleEN: (titleEN = p.title),
            descriptionEN: (descriptionEN = p.description),
          }
    );
    const value = {
      titleEN,
      descriptionEN,
      titleVN,
      descriptionVN,
    };
    return value;
  };
  const topicParent = pathSnippet[1];
  const data = new Array(listPopularPost);
  const history = useHistory();

  return (
    <div className="relative md:mx-10">
      {listPopularPost.length !== 0 && listRecentPost.length !== 0 ? (
        <Row>
          <Post>
            {listPopularPost.map((post) => (
              <ListPopularPost>
                <Card key={post.label}>
                  <Column className="col-span-2 sm:col-span-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                    <Logo>
                      <img
                        src={post.coverImage ? post.coverImage.url : null}
                        alt="ALS Vietnam"
                        className="w-64 h-32 md:h-48 ml-8 md:ml-0 -mt-32 md:mt-2"
                      />
                    </Logo>
                  </Column>

                  <Column className="col-span-2">
                    <div className="text-xs md:text-lg px-4 md:px-0 mb-4">
                      <Title>
                        <FormattedMessage
                          id="article.title"
                          defaultMessage={getPostContent(post).titleEN}
                          values={{
                            titleEN: getPostContent(post).titleEN,
                            titleVN: getPostContent(post).titleVN,
                          }}
                        />
                      </Title>
                    
                      <Description>
                        <FormattedMessage
                          id="article.description"
                          defaultMessage={getPostContent(post).descriptionEN}
                          values={{
                            descriptionEN: getPostContent(post).descriptionEN,
                            descriptionVN: getPostContent(post).descriptionVN,
                          }}
                        />
                      </Description>
                      {idBlog === "" ? (
                        <Link
                          to={`/${topicParent}/${id.idTopic}/${paramCase(
                            post.label
                          )}`}
                          className="px-2  font-semibold rounded bg-white text-green-500  text-sm inline-block mx-auto border-2 border-green-500 
                           hover:bg-green-500 hover:text-white  transition duration-300"
                        >
                          {language === "en" ? "Read more" : "Xem thêm"}
                         
                        </Link>
                      ) : (
                        <Link
                          to={`/als-blog/${post.id}`}
                          className="px-2 font-semibold rounded bg-white text-green-500  text-sm inline-block mx-auto border-2 border-green-500  hover:bg-green-500 hover:text-white  transition duration-300"
                        >
                          {language === "en" ? "Read more" : "Xem thêm"}
                        </Link>
                      )}
                    </div>
                  </Column>
                </Card>
              <div className="border-[1px] border-solid"/>
              </ListPopularPost>
            ))}
          </Post>

          <Sider>
            <SideNav className="bg-[#f5fcf6] rounded-[0.5rem] h-fit ">
              <Heading>
                {language === "en" ? "Recent Post" : "Bài viết gần đây"}
              </Heading>
              {listRecentPost.map((post) =>
                idBlog === '51826260-b477-461f-93ce-fead9d42eff8'? (
                  <LinkRecentPost
                  href={`/als-blog/${post.id}`}
                    key={paramCase(post.label)}
                  >
                    <ListRecentPost className=" text-sm text-green-700 font-medium">
                      <FormattedMessage
                        id="article.title"
                        defaultMessage={getPostContent(post).titleEN}
                        values={{
                          titleEN: getPostContent(post).titleEN,
                          titleVN: getPostContent(post).titleVN,
                        }}
                      />
                    </ListRecentPost>
                  </LinkRecentPost>
                ) : (
                  <LinkRecentPost
                    href={`/${topicParent}/${id.idTopic}/${paramCase(
                      post.label
                    )}`}
                    key={paramCase(post.label)}
                  >
                    <ListRecentPost className="text-sm text-green-700 font-medium">
                      <FormattedMessage
                        id="article.title"
                        defaultMessage={getPostContent(post).titleEN}
                        values={{
                          titleEN: getPostContent(post).titleEN,
                          titleVN: getPostContent(post).titleVN,
                        }}
                      />
                    </ListRecentPost>
                  </LinkRecentPost>
                )
              )}
            </SideNav>
            {/* {topicParent === "healing_stories" ? (
              <Button
                onClick={() => history.push("/share-story")}
                style={{
                  borderColor: "green",
                  color: "green",
                  padding: "0 1rem 0",
                  borderRadius: "1rem",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  marginTop:'1rem'
                }}
              >
                <ShareAltOutlined />
                {context.locale === "en" ? "Share story" : "Chia sẻ câu chuyện"}
              </Button>
            ) : null} */}
          </Sider>
        </Row>
      ) : topicParent === "healing_stories" ? (
        <Row>
          <Post>
            <NoResult />
          </Post>
          {/* <Sider>
            <Button
              onClick={() => history.push("/share-story")}
              style={{
                borderColor: "green",
                color: "green",
                padding: "0 1rem 0",
                borderRadius: "1rem",
                fontWeight: "bold",
                fontSize: "0.75rem",
                marginTop:'1rem'
              }}
            >
              <ShareAltOutlined />
              {context.locale === "en" ? "Share story" : "Chia sẻ câu chuyện"}
            </Button>
          </Sider> */}
        </Row>
      ) : <NoResult/>}
    </div>
  );
}
