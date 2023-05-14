import { BackTop, Button, Divider } from "antd";
import FootNav from "components/footers/FootNav";
import BreadcrumbNav from "components/hero/BreadcrumbNav";
import HeadNav from "components/hero/HeadNav";
import TitleNav from "components/hero/TitleNav";
import { Context } from "components/Wrapper";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BlogPostApi from "service/blog_post_api";
import styled from "styled-components";
import tw from "twin.macro";
import { CloudDownloadOutlined, FacebookOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import { FacebookShareButton } from "react-share";
import CommentForm from "components/comment/CommentForm";

const Description = styled.div`
  img {
    ${tw`w-7/12  items-center mx-auto`}
  }
      p {
        ${tw`justify-center text-justify leading-loose`}
      }
}
}`;

function SearchPagePostDetail(props) {
  const param = useParams();
  const context = useContext(Context);
  const [data, setData] = useState();
  const [topic, setTopic] = useState();
  const [topicParent, setTopicParent] = useState();
  const location = useLocation();
  const [fileEN, setFileEN] = useState();
  const [fileVN, setFileVN] = useState();
  const handleDownload = async () => {
    if (context.locale === "en") {
      window.location.href = fileEN;
    }
    if (context.locale === "vi") {
      window.location.href = fileVN;
    }
  };
  useEffect(() => {
    const fetchDataArticle = async () => {
      try {
        const res1 = await BlogPostApi.getPostContent(param.id);
        setData(res1);
        if (res1.articleFiles) {
          res1.articleFiles.map((f) => {
            f.language !== "VI" ? setFileEN(f?.url) : setFileVN(f?.url);
          });
        }
        const res2 = await BlogPostApi.getTopicById(res1.topicId);
        setTopic(res2);
        const res3 = await BlogPostApi.getTopicById(res2.topicParentId);
        setTopicParent(res3);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataArticle();
  }, [param.id]);
  return (
    <div className="font-[Montserrat]">
      <div className="mx-8">
        <HeadNav />

        <TitleNav
          pageTitleString={
            context.locale === "en"
              ? topicParent?.titleEnglish
              : topicParent?.titleVietnamese
          }
        />

        <BreadcrumbNav
          homePage={
            context.locale === "en"
              ? topicParent?.titleEnglish
              : topicParent?.titleVietnamese
          }
          currentPage={
            context.locale === "en"
              ? topic?.titleEnglish
              : topic?.titleVietnamese
          }
        />

        <div className="relative mx-auto md:px-48 mt-8">
          <div className="flex flex-row-reverse space-x-4 space-x-reverse">
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
            {fileEN && fileVN ? (
              <Button
                style={{
                  fontSize: "1rem",
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
            ) : null}
          </div>
          {context.locale === "en" ? (
            <Description
              dangerouslySetInnerHTML={{
                __html: data?.articleContents[0].content,
              }}
            />
          ) : (
            <Description
              dangerouslySetInnerHTML={{
                __html: data?.articleContents[1].content,
              }}
            />
          )}
          <Divider />
          <CommentForm articleId={data?.id} />


        </div>
        <BackTop className="animate-bounce">
          <VerticalAlignTopOutlined
            style={{
              height: "3rem",
              width: "3rem",
              lineHeight: "3rem",
              borderRadius: "5px",
              backgroundColor: "#1e3a1f",
              color: "#fff",
              textAlign: "center",
              fontSize: "1.25rem",
            }}
          />
        </BackTop>
      </div>
      <FootNav />
    </div>
  );
}

export default SearchPagePostDetail;
