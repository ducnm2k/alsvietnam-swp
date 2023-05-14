import { paramCase, capitalCase } from "change-case";
import FootNav from "components/footers/FootNav";
import BreadcrumbNav from "components/hero/BreadcrumbNav";
import HeadNav from "components/hero/HeadNav";
import TitleNav from "components/hero/TitleNav";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import React, { Suspense, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BlogPostApi from "service/blog_post_api";
import { useLocation, useParams } from "react-router-dom";
import LoadingData from "pages/result/LoadingData";
import { BackTop } from "antd";
import { Context } from "components/Wrapper";
const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;
export default function BlogPostView() {
  const context = useContext(Context);
  const [content, setContent] = useState();
  const [listArticle, setListArticle] = useState([]);
  const [titleChildTopicEN, setTitleChildTopicEN] = useState();
  const [titleChildTopicVN, setTitleChildTopicVN] = useState();
  const [titleParentTopicEN, setTitleParentTopicEN] = useState();
  const [titleParentTopicVN, setTitleParentTopicVN] = useState();
  const id = useParams();
  const location = useLocation();
  const pathSnippet = location.pathname.split("/");
  const topicParent = pathSnippet[1];
  const PostDetail = React.lazy(async () => {
    return new Promise((resolve) => setTimeout(resolve, 200)).then(() =>
      import("./PostDetail")
    );
  });

  useEffect(() => {
    const fetchAllArticle = async () => {
      try {
        const params = {
          topic_id:
          typeof(id.idTopic) === "undefined"
              ? "51826260-b477-461f-93ce-fead9d42eff8"
              : id.idTopic  ,
        };
        const response = await BlogPostApi.getAllArticleByTopic(params);
        setListArticle(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    const fetchPostContent = async () => {
      try {
        const response = await BlogPostApi.getPostContent(
          listArticle.find((user) => paramCase(user.label) === id.idArticle).id
        );
        setContent(
          listArticle.find((user) => paramCase(user.label) === id.idArticle)
            .articleContents
        );
      } catch (error) {
        console.log("Error:", error);
      }
    };

    const fetchTopic = async () => {
      try {
        const response = await BlogPostApi.getTopicById(
          typeof(id.idTopic) === "undefined"
            ?  "51826260-b477-461f-93ce-fead9d42eff8"
            : id.idTopic
        );
        setTitleChildTopicEN(response.titleEnglish);
        setTitleChildTopicVN(response.titleVietnamese);
 
        const res = await BlogPostApi.getTopicById(response.topicParentId);
        setTitleParentTopicEN(res.titleEnglish);
        setTitleParentTopicVN(res.titleVietnamese);
      } catch (error) {
        console.log("Error Fetch Topic:", error);
      }
    };

    fetchAllArticle();
    fetchPostContent();
    fetchTopic();
  }, [id]);
  return (
    <div className="font-[Montserrat]">
     
      <Container>
        <HeadNav activePage={topicParent} />
        {context.locale === "en" ? (
          <>
            <TitleNav pageTitleString={typeof(titleParentTopicEN) === 'undefined' ? titleChildTopicEN : titleParentTopicEN} />
            <BreadcrumbNav
              homePage={titleParentTopicEN}
              currentPage={titleChildTopicEN === 'null' ? titleParentTopicEN : titleChildTopicEN}
            />
          </>
        ) : (
          <>
            <TitleNav pageTitleString={typeof(titleParentTopicVN) === 'undefined' ? titleChildTopicVN : titleParentTopicVN} />
            <BreadcrumbNav
              homePage={titleParentTopicVN }
              currentPage={titleChildTopicVN === 'null' ? titleParentTopicVN : titleChildTopicVN}
            />
          </>
        )}
        <Suspense fallback={<LoadingData />}>
          <PostDetail listRecentPost={listArticle} />
        </Suspense>
      </Container>
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
      <FootNav />
    </div>
  );
}
