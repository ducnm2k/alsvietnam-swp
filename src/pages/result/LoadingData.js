import React from "react";
import "antd/dist/antd.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Result } from "antd";

function LoadingData() {
  return (
    <Result
    className="mt-32 md:mt-0"
      icon={<LoadingOutlined />}
      title="ALS VietNam is loading..."
    />
  );
}

export default LoadingData;
