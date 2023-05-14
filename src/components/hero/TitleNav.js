import { Card } from "antd";
import React from "react";
import BackgroundTitle from "../../images/title.jpg";
import {FormattedMessage} from "react-intl";

export default function TitleNav({ pageTitle,pageTitleString }) {
  return (
    <div className="mt-8">
      <Card
        className="shadow-inner text-center"
        style={{
          height: "7rem",
          backgroundImage: `url(${BackgroundTitle})`,
          backgroundPosition: "center top",
        }}
      >
        <h1 className="lg:text-4xl  text-2xl text-[#1d371d] uppercase mt-4">
            {pageTitleString} 

        </h1>
      </Card>
    </div>
  );
}
