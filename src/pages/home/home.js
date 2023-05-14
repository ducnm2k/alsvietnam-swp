import React from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import ImgBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";
import BrieflyAboutALS from "components/features/Home/BrieflyAboutALS.js";
import Mission from "components/features/Home/Mission.js";
import MrsThaoStory from "components/features/Home/Mrs.Thao’sStory.js";
import Acknowledgements from "components/features/Home/Acknowledgements.js";
import GetInvolved from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import UnderstandingALS from "components/cards/UnderstandingALSHome.js";
import Blog1 from "components/cards/BlogHome.js";
import InternationalInf from "components/pricing/ThreePlansHome.js";
import HeadNav from "components/hero/HeadNav";
import HeaderCarousel from "components/hero/HeaderCarousel";
import FootNav from "../../components/footers/FootNav";
import styled from "styled-components";
import ThreeColSimple from "../../components/features/ThreeColSimple";


export default () => {


  return (  <div className="font-[Montserrat] px-8">


    <HeadNav activePage="Home" />

    <HeaderCarousel />
    <BrieflyAboutALS />
    <Mission />
    <MrsThaoStory />
    <Acknowledgements />
    <ImgBackground />
    <UnderstandingALS />
    <InternationalInf />
    <ThreeColSimple/>
    <Blog1 />


<div className="-mx-8">
<FootNav />
</div>
</div>)
};
