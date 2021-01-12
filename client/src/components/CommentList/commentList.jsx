import React from 'react';
import CommentBox from '../CommentBox/commentBox';

const CommentList = (props) => {
  const renderedComments = props.comments.map((comment) => {
    if(props.currentVideoId === comment.videoId){
      return (<CommentBox 
        key={comment} 
        text={comment.text} 
        likes={comment.likes}
        dislikes={comment.dislikes}
        comment = {comment}
        updateComments={() => props.updateComments()}
      />)
    }
  });
  return <div className="container-fluid comment-list">{renderedComments}</div>
  };
  
  export default CommentList;