 import React from 'react';
 import './videoDetails.css';

const VideoDetails = ({video}) => {
    if (!video) {
        return (
            <div>
                <div>
                    <iframe width="1232" height="721" src="https://www.youtube.com/embed/bSuk-H5PFXs" allowFullScreen title='Video player'/>
                </div>
                <div>
                    <h4 className="dev-title">Best of the Houston Rockets | 2018-19 NBA Season</h4>
                    <h6>NBA</h6>
                    <p className="border-bottom">Check out the best of the Houston Rockets from this past season!</p>
                </div>
                
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
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