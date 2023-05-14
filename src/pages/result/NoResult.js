import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Empty, Result } from "antd";
import { Context } from "components/Wrapper";

function NoResult() {
  const context = useContext(Context);
  return (
    <div className="-mt-18 md:-mt-18 text-xl md:text-2xl text-center">
       <Empty description={false}/>
      {context.locale === "en" ? (
        // <Result
        //   className="-mt-18 md:-mt-18"
        //   status={"404"}
        //   title="Sorry, we will update as soon as possible..."
        // />
       <h1>Sorry, we will update as soon as possible...</h1>
      ) : (
        // <Result
        //   className="-mt-18 md:-mt-18"
        //   status={"404"}
        //   title="Xin lỗi, chúng tôi sẽ cập nhật sớm nhất..."
        // />
        <h1>Xin lỗi, chúng tôi sẽ cập nhật sớm nhất...</h1>
      )}
    </div>
  );
}

export default NoResult;
