 import React from 'react';
 import './videoDetails.css';

const VideoDetails = ({video}) => {
    if (!video) {
        return (
            <div>
                <div>
<<<<<<< HEAD
                    <iframe width="1232" height="721" src="https://www.youtube.com/embed/bSuk-H5PFXs" allowFullScreen title='Video player'/>
                </div>
                <div>
                    <h4 className="dev-title">Best of the Houston Rockets | 2018-19 NBA Season</h4>
                    <h6>NBA</h6>
                    <p className="border-bottom">Check out the best of the Houston Rockets from this past season!</p>
=======
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/Kp3-pXoDoIw" allowFullScreen title='Video player'/>
                </div>
                <div>
                    <h4>DevCodeCamp shaking up traditional 4-year degree</h4>
>>>>>>> e6e5cc37d59ce5a5836b91d1120394c575541f42
                </div>
                
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div className="container videos">
            <div>
<<<<<<< HEAD
                <iframe width="1168" height="657" src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4 className="dev-title">{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
                <p className="border-bottom">{video.snippet.description}</p>
=======
                <iframe width="1120" height="630" src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
>>>>>>> e6e5cc37d59ce5a5836b91d1120394c575541f42
            </div>
        </div>

    )
}

export default VideoDetails;