import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

import HomePage from "pages/home/home.js";
import UnderstandingALS from "pages/understandingALS/understanding-ALS.js";
import NavigatingALS from "pages/navigating ALS/navigating-ALS.js";
import ALSBlogs from "pages/blogs/als_blogs.js";
import AboutUs from "pages/aboutUs/about_us.js";

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
// import LoginPage from "pages/Login.js";
// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import ComponentRenderer from "ComponentRenderer.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GetInvolved from "./pages/getInvolved/GetInvolved";
import Donate from "./pages/donate/Donate";
import BlogPostView from "components/blogs/BlogPostView";
import HealingStory from "pages/healingStories/healing";
import DonateCompaignView from "pages/donate/donate_compaign_view";
import Login from "pages/Login";
import Verify from "pages/Verify";

import Signup from "pages/Signup";
import DonationNotificationPage from "DonationNotificationPage.js";
import ForgotPassword from "pages/ForgotPassword";
import SuccessDonation from "pages/result/SuccessDonation";
import FailDonation from "pages/result/FailDonation";
import SearchPage from "pages/search/SearchPage";
import SearchPagePostDetail from "pages/search/SearchPagePostDetail";

import ShareStory from "pages/shareStory/share-story";

import ManageProfile from "pages/profile/ManageProfile";
import ChangePassword from "pages/profile/ChangePassword";


export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/donation-notification">
          <DonationNotificationPage />
        </Route>
        <Route path="/donation/success" exact={true}>
          <SuccessDonation />
        </Route>
        <Route path="/donation/fail" exact={true}>
          <FailDonation />
        </Route>
        <Route path="/Home">
          <HomePage />
        </Route>
        <Route path="/understanding_ALS/:idTopic" exact={true}>
          <UnderstandingALS />
        </Route>
        <Route path="/understanding_ALS/:idTopic/:idArticle" exact={true}>
          <BlogPostView />
        </Route>
        <Route path="/navigating_ALS/:idTopic" exact={true}>
          <NavigatingALS />
        </Route>
        <Route path="/navigating_ALS/:idTopic/:idArticle" exact={true}>
          <BlogPostView />
        </Route>
        <Route path="/healing_stories/:idTopic" exact={true}>
          <HealingStory />
        </Route>
        <Route path="/healing_stories/:idTopic/:idArticle" exact={true}>
          <BlogPostView />
        </Route>
        <Route path="/als-blog" exact={true}>
          <ALSBlogs />
        </Route>
        <Route path="/als-blog/:idArticle" exact={true}>
          <BlogPostView />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/blog-post-view">
          <BlogPostView />
        </Route>
        <Route path="/healing">
          <HealingStory />
        </Route>
        <Route path="/get-involved" exact={true}>
          <GetInvolved />
        </Route>
        <Route path="/donation" exact={true}>
          <Donate />
        </Route>
        <Route path="/donation/:id" exact={true}>
          <DonateCompaignView />
        </Route>
        <Route path="/search/:keyword" exact={true}>
          <SearchPage />
        </Route>
        <Route path="/search/:id/detail" exact={true}>
          <SearchPagePostDetail />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/signup" exact={true}>
          <Signup />
        </Route>
        <Route path="/verify/:idUser" exact={true}>
          <Verify />
        </Route>
        {/* <Route path="/donation-notification" component={  <DonationNotificationPage/>}>
          <Redirect to="/donation-notification-result"/>
        </Route> */}
        {/* <Route path="/donation-notification" >
        <DonationNotificationPage/>
        </Route> */}
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>

<Route path="/share-story" exact={true}>
<ShareStory/>
</Route>

        <Route path="/change-password" exact={true}>
          <ChangePassword />
        </Route>
        <Route path="/manage-profile" exact={true}>
          <ManageProfile />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
