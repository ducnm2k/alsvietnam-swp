import { AutoComplete, Breadcrumb, Input } from "antd";
import { Context } from "components/Wrapper";
import React, { useContext, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const { Search } = Input;
export default function BreadcrumbNav({ homePage, currentPage }) {
  const context = useContext(Context);
  const id = useParams();
  const location = useLocation();
  const pathSnippet = location.pathname.split("/");
  const topicParent = pathSnippet[1];
  const history = useHistory();
  const onSearch = (title) => {
    history.push(`/search/${title}`);
  };
  return (
    <div className="grid grid-cols-3 gap-4 mt-8 md:mx-14">
      <div className="col-span-3 md:col-span-2">
        <Breadcrumb key={id}>
          <Breadcrumb.Item className="text-base md:text-lg">
            {context.locale === "en" ? (
              <a href="/">Home</a>
            ) : (
              <a href="/">Trang chủ</a>
            )}
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-base md:text-lg">
            {homePage}
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-base md:text-lg">
            <a href={`/${topicParent}/${id.idTopic}`}>{currentPage}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className=" col-span-3 md:col-span-1 rounded">
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
  );
}
