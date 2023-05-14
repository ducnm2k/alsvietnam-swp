import React, {useContext} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import DescriptionInvolved from "./DescriptionInvolved";
import HeadNav from "../../components/hero/HeadNav";
import TwoColContactUsWithIllustrationFullForm from "../../components/forms/TwoColContactUsWithIllustrationFullForm";
import FootNav from "../../components/footers/FootNav";
import TitleNav from "../../components/hero/TitleNav";
import GetInvolved from "../../components/blogs/ThreeColSimpleWithImageAndDashedBorder";
import BecomingASeed from "./BecomingASeed";
import BecomingASeedling from "./BecomingASeedling";
import BecomingASapling from "./BecomingASapling";
import { BackTop } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import {Context} from "../../components/Wrapper";
export default () => {
    const context = useContext(Context);
    return (
<div 
    style={{
      position: "relative",
    }}
    className="font-[Montserrat] px-8"
  >
   
      <HeadNav activePage="Involved" />
        {context.locale === "en" ?
            <TitleNav pageTitleString="Get Involved"/> :
            <TitleNav pageTitleString="Tham Gia Cùng Chúng Tôi"/>
        }
      <DescriptionInvolved />
      {/* <GetInvolved status='false' /> */}
      <BecomingASeed />
      <BecomingASeedling />
      <BecomingASapling />
      <TwoColContactUsWithIllustrationFullForm />
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
      <div className="-mx-8 -mb-8">
        <FootNav />
      </div>
  
  </div>)
        };
