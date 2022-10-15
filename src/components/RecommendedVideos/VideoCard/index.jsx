import React from "react";
import styles from "./style.module.css";
import VideoCardImage from "../VideoCardImage";
import VideoCardIcon from "../VideoCardIcon";
import ProductTitle from "../../ProductCard/ProductTitle";

const VideoCard = ({ video_info }) => {
  const { id, image_src, video_link, title } = video_info;

  return (
    <div key={id} className={styles.videoCard}>
      <div className={styles.videoWrapper}>
        <a href={video_link} target="_blank" rel="noreferrer"> 
          <div className={styles.image}>
            <VideoCardImage img_src={image_src} imageTitle={title} />
          </div>
          <div className={styles.videoIcon}>
            <div className={styles.videoIconWrapper}>
              <VideoCardIcon />
            </div>
          </div>
        </a>
      </div>
      <div className={styles.videoTitle}>
        <ProductTitle title={title} />
      </div>
    </div>
  );
};

export default VideoCard;
