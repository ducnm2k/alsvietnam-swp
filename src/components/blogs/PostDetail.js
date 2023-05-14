import React, { useContext, useEffect, useState } from "react";
import { paramCase, capitalCase } from "change-case";
import tw from "twin.macro";
import SocialFollow from "components/hero/SocialFollow";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  CloudDownloadOutlined,
  FacebookOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Context } from "../Wrapper";
import { Button, Divider, Menu } from "antd";

import CommentForm from "components/comment/CommentForm";
import { FacebookIcon, FacebookShareButton } from "react-share";
import BlogPostApi from "service/blog_post_api";

const Post = tw.div`col-span-4 md:col-span-2`;

const Description = styled.div`
  img {
    ${tw`w-7/12  items-center mx-auto`}
  }
      p {
        ${tw`justify-center text-justify leading-loose md:ml-4`}
      }
}
}`;
const Row = tw.div`grid grid-cols-3 gap-12   md:mx-10 mx-auto md:-mt-32`;

const Sider = tw.div`col-span-4 md:col-span-1  mb-64 lg:mb-80`;
const SideNav = tw.div`px-8 py-8 md:mt-8 -mt-8`;
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
const Heading = tw.h1`text-lg sm:text-xl font-bold tracking-wide`;

export default function PostDetail({ listRecentPost }) {
  const context = useContext(Context);
  const language = context.locale;
  const location = useLocation();
  const pathSnippet = location.pathname.split("/");
  const id = useParams();
  const topicParent = pathSnippet[1];
  const [contentVN, setContentVN] = useState([]);
  const [contentEN, setContentEN] = useState([]);
  const [fileVN, setFileVN] = useState();
  const [fileEN, setFileEN] = useState();
  const history = useHistory();
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
  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        const data = listRecentPost?.find(
          (user) => paramCase(user.label) === id.idArticle
        ).articleContents;

        const file = listRecentPost?.find(
          (user) => paramCase(user.label) === id.idArticle
        ).articleFiles;

        if (file) {
          file.map((f) => {
            f.language !== "VI" ? setFileEN(f.url) : setFileVN(f.url);
          });
        }

        data.map((d) => {
          d.language !== "VI"
            ? setContentEN(d.content)
            : setContentVN(d.content);
        });
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchPostContent();
  }, []);
useEffect(()=>{
  const fecthDetailBlog = async () =>{
try {
  const response = await BlogPostApi.getPostContent(id.idArticle)
  setContentEN(response.articleContents[0].content)
  setContentVN(response.articleContents[1].content)
 
} catch (error) {
  console.log('Error: ', error)
}
  }
  fecthDetailBlog();
},[id])
  const getPostContent = (post) => {
    let titleEN = "",
      descriptionEN = "",
      titleVN = "",
      descriptionVN = "";

    post.articleContents.map((p) =>
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
  const handleDownload = async () => {
    if (context.locale === "en") {
      window.location.href = fileEN;
    }
    if (context.locale === "vi") {
      window.location.href = fileVN;
    }
  };
  return (
    <div className="relative  md:py-32">
      <Row>
        <Post>
          {context.locale === "en" ? (
            <section className="hero container mx-auto ">
              <Description
                dangerouslySetInnerHTML={{
                  __html: contentEN,
                }}
              />
            </section>
          ) : (
            <section className="hero container mx-auto ">
              <Description
                dangerouslySetInnerHTML={{
                  __html: contentVN,
                }}
              />
            </section>
          )}
        </Post>
        <Sider>
          <SideNav className="bg-[#f5fcf6] rounded-[0.5rem] ">
            <Heading>
              {language === "en" ? "Recent Post" : "Bài viết gần đây"}
            </Heading>
            {console.log(idBlog)}
         {idBlog === "51826260-b477-461f-93ce-fead9d42eff8" ? (   listRecentPost.map((post) => (
              <LinkRecentPost
                href={`/als-blog/${post.id}`}
                key={capitalCase(post.label)}
              >
                <ListRecentPost className="text-sm md:text-base text-green-700 font-medium">
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
            ))): ( listRecentPost.map((post) => (
              <LinkRecentPost
                href={`/${topicParent}/${id.idTopic}/${paramCase(post.label)}`}
                key={capitalCase(post.label)}
              >
                <ListRecentPost className="text-sm md:text-base text-green-700 font-medium">
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
            )))}
          </SideNav>
          {fileEN && fileVN ? (
            <div className="mt-8 flex space-x-4">
              <Button
                style={{
                  fontSize: "0.75rem",
                  padding: "0 1rem 0",
                  borderRadius: "1rem",
                  background: "green",
                  color: "white",
                  fontWeight: "bold",
                }}
                type="text"
                onClick={handleDownload}
              >
                <CloudDownloadOutlined />
                <FormattedMessage id="article.download" />
              </Button>
              <Button
                style={{
                  background: "#4267b2",
                  color: "white",
                  padding: "0 1rem 0",
                  borderRadius: "1rem",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                }}
              >
                <FacebookShareButton
                  url={`https://alsvietnam.org/${location.pathname}`}
                  hashtag={"#alsvietnam"}
                >
                  <FacebookOutlined />{" "}
                  {context.locale === "en" ? "Share" : "Chia sẻ"}
                </FacebookShareButton>
              </Button>
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
                  }}
                >
                  <ShareAltOutlined />
                  {context.locale === "en"
                    ? "Share story"
                    : "Chia sẻ câu chuyện"}
                </Button>
              ) : null} */}
            </div>
          ) : (
            <div className="mt-8">
              <Button
                style={{
                  background: "#4267b2",
                  color: "white",
                  padding: "0 1rem 0",
                  borderRadius: "1rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <FacebookShareButton
                  url={`https://alsvietnam.org/${location.pathname}`}
                  hashtag={"#alsvietnam"}
                >
                  <FacebookOutlined />{" "}
                  {context.locale === "en" ? "Share" : "Chia sẻ"}
                </FacebookShareButton>
              </Button>
              {topicParent === "healing_stories" ? (
                <Button
                  onClick={() => history.push("/share-story")}
                  style={{
                    borderColor: "green",
                    color: "green",
                    padding: "0 1rem 0",
                    borderRadius: "1rem",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                  }}
                >
                  <ShareAltOutlined />
                  {context.locale === "en"
                    ? "Share story"
                    : "Chia sẻ câu chuyện"}
                </Button>
              ) : null}
            </div>
          )}
        </Sider>
      </Row>
      <Divider />
      <CommentForm
        articleId={
          listRecentPost?.find((user) => paramCase(user.label) === id.idArticle)
            ?.id
        }
      />
    </div>
  );
}
