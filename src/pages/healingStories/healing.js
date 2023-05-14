import FootNav from "components/footers/FootNav";
import BreadcrumbNav from "components/hero/BreadcrumbNav";
import HeadNav from "components/hero/HeadNav";
import TitleNav from "components/hero/TitleNav";
import React, { Suspense, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams, withRouter } from "react-router-dom";

import { BackTop } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import BlogPostApi from "service/blog_post_api";
import LoadingData from "pages/result/LoadingData";
import { Context } from "components/Wrapper";

const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

function HealingStory() {
  const context = useContext(Context);
  const [titleChildTopicEN, setTitleChildTopicEN] = useState();
  const [titleChildTopicVN, setTitleChildTopicVN] = useState();
  const [titleParentTopicEN, setTitleParentTopicEN] = useState();
  const [titleParentTopicVN, setTitleParentTopicVN] = useState();
  const [listArticle, setListArticle] = useState([]);
  const idTopic = useParams();
  const BlogPostList = React.lazy(async () => {
    return new Promise((resolve) => setTimeout(resolve, 500)).then(() =>
      import("components/blogs/BlogPostList")
    );
  });
  useEffect(() => {
    const fetchAllArticle = async () => {
      try {
        const params = { topic_id: idTopic.idTopic };
        const response = await BlogPostApi.getAllArticleByTopic(params);
        setListArticle(response.data);
      } catch (error) {
        console.log("Error Fetch All Article:", error);
      }
    };
    const fetchTopic = async () => {
      try {
        const response = await BlogPostApi.getTopicById(idTopic.idTopic);
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
    fetchTopic();
  }, [idTopic.idTopic]);

  return (
    <div className="font-[Montserrat]">
      <Container>
        <HeadNav activePage="healing_stories" />
        {context.locale === "en" ? (
          <>
            <TitleNav pageTitleString={titleParentTopicEN} />
            <BreadcrumbNav
              homePage={titleParentTopicEN}
              currentPage={titleChildTopicEN}
            />
          </>
        ) : (
          <>
            <TitleNav pageTitleString={titleParentTopicVN} />
            <BreadcrumbNav
              homePage={titleParentTopicVN}
              currentPage={titleChildTopicVN}
            />
          </>
        )}
        <Suspense fallback={<LoadingData />}>
          <BlogPostList
            listPopularPost={listArticle}
            listRecentPost={listArticle}
          />
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

export default withRouter(HealingStory);
