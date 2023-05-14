import { Carousel } from "antd";
import { Context } from "components/Wrapper";
import React, { useContext } from "react";

import en1 from "../../images/en-1.jpg";
import en2 from "../../images/en-2.jpg";
import en3 from "../../images/en-3.jpg";
import vn1 from "../../images/vn-1.jpg";
import vn2 from "../../images/vn-2.jpg";
import vn3 from "../../images/vn-3.jpg";
export default function HeaderCarousel() {
  const listImageEN = [
    {
      src: en1,
    },
    {
      src: en2,
    },
    {
      src: en3,
    },
  ];
  const listImageVN = [
    {
      src: vn1,
    },
    {
      src: vn2,
    },
    {
      src: vn3,
    },
  ];
  const context = useContext(Context);
  return (
    <Carousel className="mt-16 md:mt-8 drop-shadow-xl md:mx-20" autoplay>
      {context.locale === "en"
        ? listImageEN.map((image) => (
            <div>
              <div className="md:h-[32rem] h-[12rem] text-center rounded-[1rem]">
                <img
                  key={image.src}
                  src={image.src}
                  className="h-[12rem] w-full md:h-[32rem]"
                />
              </div>
            </div>
          ))
        : listImageVN.map((image) => (
            <div>
              <div className="md:h-[32rem] h-[12rem] text-center rounded-[1rem]">
                <img
                  key={image.src}
                  src={image.src}
                  className="h-[12rem] w-full md:h-[32rem]"
                />
              </div>
            </div>
          ))}
    </Carousel>
  );
}
