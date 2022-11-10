import React from "react";
import HeaderPart from "../../HeaderPart";
import Featured from "../../Featured";
import AboutMatter from "../../AboutMatter";
import Explore from "../../Explore";
import Shop from "../../Shop";
import RecommendedVideos from "../../RecommendedVideos";
import AsYouSeen from "../../AsYouSeen";

const MainPage = () => {
  return (
    <>
      <HeaderPart />
      <Featured />
      <AboutMatter />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <AsYouSeen />
    </>
  );
};

export default MainPage;
