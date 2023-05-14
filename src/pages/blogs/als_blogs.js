import FootNav from "components/footers/FootNav";

import HeadNav from "components/hero/HeadNav";
import TitleNav from "components/hero/TitleNav";
import React, {Suspense, useEffect, useState, lazy, useContext} from "react";
import styled from "styled-components";
import { useParams, withRouter } from "react-router-dom";

import { BackTop, Input } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import BlogPostApi from "service/blog_post_api";
import LoadingData from "pages/result/LoadingData";
import {Context} from "../../components/Wrapper";


const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

function ALSBlog() {
  const [listArticle, setListArticle] = useState([]);
 
    const context = useContext(Context);

    const BlogPostList = React.lazy(async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
      import("components/blogs/BlogPostList")
    );
  });

  useEffect(() => {
    const fetchAllArticle = async () => {
      try {
        const blog = await BlogPostApi.searchtopicbyname('ALS Blogs')
        const params = { topic_id: `${blog.data[0]?.id}` };
        const response = await BlogPostApi.getAllArticleByTopic(params);
        setListArticle(response.data);
      } catch (error) {
        console.log("Error Fetch All Article:", error);
      }
    };
  
    fetchAllArticle();
    
  }, []);

  return (
    <body className="font-[Montserrat]">
      <Container>
        <HeadNav activePage="AlsBlog" />
          {context.locale === "en" ?
              <TitleNav pageTitleString="ALS Blog" />:
              <TitleNav pageTitleString="Tin Tức ALS" />}
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
    </body>
  );
}

export default withRouter(ALSBlog);
