import React, { useState } from "react";
import Heading2 from "../Heading2";
import VideoCard from "../RecommendedVideos/VideoCard";
import ViewButton from "../Featured/ViewButton";
import { Container, Grid } from "@mui/material";

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
    {
      id: 4,
      video_link: "https://youtu.be/urSCa5nywJI",
      image_src: "./assets/images/rec-video1.png",
      title: "Jamdani",
    },
    {
      id: 5,
      video_link: "https://youtu.be/s1dRMZ61J8M",
      image_src: "./assets/images/rec-video2.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      id: 6,
      video_link: "https://youtu.be/s1dRMZ61J8M",
      image_src: "./assets/images/rec-video3.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      id: 7,
      video_link: "https://youtu.be/urSCa5nywJI",
      image_src: "./assets/images/rec-video1.png",
      title: "Jamdani",
    },
    {
      id: 8,
      video_link: "https://youtu.be/s1dRMZ61J8M",
      image_src: "./assets/images/rec-video2.png",
      title: "Lorem ipsum dolor sit amet",
    },
  ];
  const [shownVideo, setShownVideo] = useState(3);
  let videos = recommendedVideos.filter((item, index) => index < shownVideo);

  return (
    <Container sx={{ padding: "30px 0" }}>
      <Heading2 heading="Recommended Videos" />
      <Grid container alignItems="center" spacing={3}>
        {[] &&
          videos.map((recommendedVideo) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={recommendedVideo.id}>
                <VideoCard video_info={recommendedVideo} />
              </Grid>
            );
          })}
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: "24px" }}
      >
        <ViewButton
          value={
            shownVideo < recommendedVideos.length ? "Show more" : "show less"
          }
          onClick={() =>
            shownVideo < recommendedVideos.length
              ? setShownVideo(shownVideo + 3)
              : setShownVideo(3)
          }
        />
      </Grid>
    </Container>
  );
};

export default RecommendedVideos;
