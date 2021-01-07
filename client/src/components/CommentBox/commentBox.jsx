import React from 'react';
import './commentBox.css';

const CommentBox = ({text, likes}) => {
    return(
        <div className="comment-box">
            <p>{text}</p>
            <div>
                <button className="thumbs-up"></button>{likes}
                <button className="thumbs-down"></button>
                <button className="reply">REPLY</button>
            </div>
        </div>
    )
}

export default CommentBox;