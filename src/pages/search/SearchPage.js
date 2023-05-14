import { Card, Input, List } from "antd";
import FootNav from "components/footers/FootNav";
import HeadNav from "components/hero/HeadNav";
import { Context } from "components/Wrapper";
import LoadingData from "pages/result/LoadingData";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import BlogPostApi from "service/blog_post_api";
import tw from "twin.macro";

const Title = tw.h5`text-xl font-bold text-gray-900 hover:text-green-700 leading-8`;
const Description = tw.h2`text-sm md:text-base font-normal leading-loose text-justify`;

function SearchPage(props) {
  const param = useParams();
  const [listData, setListData] = useState([]);
  const context = useContext(Context);
  useEffect(() => {
    const searchArticle = async () => {
      const response = await BlogPostApi.getArticleByTitle(param.keyword);
      setListData(response.data);
    };
    searchArticle();
  },[param]);
  const history = useHistory();
  const onSearch = (title) => {
    history.push(`/search/${title}`);
  };
  return (
    <div className="font-[Montserrat]">
      <div className="mx-8">
        <HeadNav />
        <div className="bg-[#f5fcf6] px-8 py-16 md:py-18 mt-8">
          <h2 className="font-semibold text-center text-xl md:text-4xl">
            {context.locale === "en"
              ? ` Search result for: ${param.keyword}`
              : ` Kết quả tìm kiếm cho: ${param.keyword}`}
          </h2>
          <div className="md:px-64">
            <Input.Search
              placeholder={
                context.locale === "en"
                  ? "Enter search term..."
                  : "Tìm kiếm từ khoá..."
              }
              size="large"
              onSearch={onSearch}
            />
          </div>
        </div>
        <div className="mt-8 md:px-16">
        <Suspense fallback={<LoadingData />}>
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                extra={
                  <img width={300} alt="ALS Vietnam" src={item.coverImage?.url} />
                }
              >
                <List.Item.Meta
                  // avatar={
                  //   <img width={300} alt="logo" src={item.coverImage?.url} />
                  // }
                  title={
                    <Title>
                      <Link
                        className="text-xl font-bold text-gray-900 hover:text-green-700 leading-8"
                        to={`/search/${item.id}/detail`}
                      >
                        {" "}
                        {context.locale === "en"
                          ? item.articleContents[0].title
                          : item.articleContents[1].title}
                      </Link>
                    </Title>
                  }
                  description={
                    <Description>
                      {" "}
                      {context.locale === "en"
                        ? item.articleContents[0].description
                        : item.articleContents[1].description}
                    </Description>
                  }
                />
              </List.Item>
            )}
          />
        </Suspense>
        </div>
      </div>

      <FootNav />
    </div>
  );
}

export default SearchPage;
