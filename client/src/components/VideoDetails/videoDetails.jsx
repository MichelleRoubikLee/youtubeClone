 import React from 'react';
 import './videoDetails.css';

const VideoDetails = ({video}) => {
    if (!video) {
        return (
            <div></div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);
    return (
        <div className="container videos">
            <div>
                <iframe width="1168" height="657" src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4 className="dev-title">{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
                <p className="border-bottom">{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetails;