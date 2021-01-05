import React from 'react';
import './videoPlayer.css';

const VideoPlayer = ({video, handleVideoSelect}) => {
  return (
    <div className="player" onClick={() => handleVideoSelect(video)}>
      <img width="160" height="auto" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div>{video.snippet.channelTitle}</div>
      </div>
    </div>
  )
}

export default VideoPlayer;