import React from "react";
import "antd/dist/antd.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Image, Result } from "antd";
import commingsoon from "../../images/comming-soon.jpg"
function CommingSoon() {
  return (
  <Image src={commingsoon} height={400} />
  );
}

export default CommingSoon;
