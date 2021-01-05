 import React from 'react';
 import './videoDetails.css';

const VideoDetails = ({video}) => {
    if (!video) {
        return (
            <div>
                <div>
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/Kp3-pXoDoIw" allowFullScreen title='Video player'/>
                </div>
                <div>
                    <h4>DevCodeCamp shaking up traditional 4-year degree</h4>
                </div>
                
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div className="container videos">
            <div>
                <iframe width="1120" height="630" src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetails;