import React from "react";
import Heading2 from "../Heading2";
import VideoCard from "../RecommendedVideos/VideoCard";
import styles from "./style.module.css";
import ViewButton from "../Featured/ViewButton";

const RecommendedVideos = () => {
  const recommendedVideos = [
    {
      id: 1,
      video_link: "https://youtu.be/urSCa5nywJI",
      image_src: "./assets/images/rec-video1.png",
      title: "Jamdani",
    },
    {
      id: 2,
      video_link: "https://youtu.be/s1dRMZ61J8M",
      image_src: "./assets/images/rec-video2.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      video_link: "https://youtu.be/s1dRMZ61J8M",
      image_src: "./assets/images/rec-video3.png",
      title: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <section className={styles.container}>
      <Heading2 heading="Recommended Videos" />
      <div className={styles.videoCards}>
        {[] &&
          recommendedVideos.map((recommendedVideo) => {
            return (
              <div className={styles.videoCard}>
                <VideoCard video_info={recommendedVideo} />
              </div>
            );
          })}
      </div>
      <div className={styles.showBtn}>
        <ViewButton value="Show more" />
      </div>
    </section>
  );
};

export default RecommendedVideos;
