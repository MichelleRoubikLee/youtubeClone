import React from 'react';
import CommentBox from '../CommentBox/commentBox';

const CommentList = ({comments, currentVideoId}) => {
  const renderedComments = comments.map((comment) => {
    if(currentVideoId === comment.videoId){
      return (<CommentBox 
        key={comment} 
        text={comment.text} 
        likes={comment.likes}
        dislikes={comment.dislikes}
        comment = {comment}
      />)
    }
  });
  return <div className="container-fluid comment-list">{renderedComments}</div>
  };
  
  export default CommentList;