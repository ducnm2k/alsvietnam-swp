import FootNav from "components/footers/FootNav";
import BreadcrumbNav from "components/hero/BreadcrumbNav";
import HeadNav from "components/hero/HeadNav";
import TitleNav from "components/hero/TitleNav";
import { ContentWithPaddingXl } from "components/misc/Layouts";
import { Context } from "components/Wrapper";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { useContext } from "react";
import tw from "twin.macro";
import DonateCompaignDetail from "./donate_compaign_detail";

function DonateCompaignView(props) {
  const context = useContext(Context);
  const language = context.locale;
  return (
    <div className="font-[Montserrat]">
      <AnimationRevealPage>
        <HeadNav />
        {language === "en" ? (
          <TitleNav pageTitleString="Donation" />
        ) : (
          <TitleNav pageTitleString="Đóng góp" />
        )}

        <ContentWithPaddingXl>
          <DonateCompaignDetail />
        </ContentWithPaddingXl>
        <div className="-mx-8 -mb-8">
          <FootNav />
        </div>
      </AnimationRevealPage>
    </div>
  );
}

export default DonateCompaignView;
