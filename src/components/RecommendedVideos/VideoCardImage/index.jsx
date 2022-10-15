import React from 'react'
import styles from './style.module.css'

const VideoCardImage = ({ img_src, imageTitle }) => {
  return (
    <img className={styles.videoCardImage} src={img_src} alt={imageTitle} />
  );
};

export default VideoCardImage;
