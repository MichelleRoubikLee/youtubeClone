import React from 'react';
import VideoPlayer from '../VideoPlayer/videoPlayer';
import './defaultVideos.css';

const DefaultVideos = ({videos, handleVideoSelect, video}) => {
    if(video){
        return <div></div>
    }
  const renderedVideos = videos.map((video) => {
    return <VideoPlayer key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
  });

  return <div className="container-fluid default">{renderedVideos}</div>
};

export default DefaultVideos;