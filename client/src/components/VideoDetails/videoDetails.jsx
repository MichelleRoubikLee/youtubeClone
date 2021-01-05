 import React from 'react';
 import './videoDetails.css';

const VideoDetails = ({video}) => {
    if (!video) {
        return (
            <div>
                <div>
<<<<<<< HEAD
                    <iframe width="1168" height="657" src="https://www.youtube.com/embed/Kp3-pXoDoIw" allowFullScreen title='Video player'/>
                </div>
                <div>
                    <h4 className="dev-title">DevCodeCamp shaking up traditional 4-year degree</h4>
                    <h6>TMJ4 News</h6>
                    <p className="border-bottom">A new Milwaukee boot camp called devCodeCamp is shaking up the traditional four-year college degree.</p>
=======
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/Kp3-pXoDoIw" allowFullScreen title='Video player'/>
                </div>
                <div>
                    <h4>DevCodeCamp shaking up traditional 4-year degree</h4>
>>>>>>> e52fc3fff00786984b45042c0476b5e7241177d5
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
>>>>>>> e52fc3fff00786984b45042c0476b5e7241177d5
            </div>
        </div>

    )
}

export default VideoDetails;