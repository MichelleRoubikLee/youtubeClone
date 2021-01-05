import React from 'react';
import VideoPlayer from '../VideoPlayer/videoPlayer';
import './videoList.css';

const VideoList = ({videos, handleVideoSelect}) => {
  const renderedVideos = videos.map((video) => {
    return <VideoPlayer key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
  });

  return <div className="container-fluid video-list">{renderedVideos}</div>
};

export default VideoList;