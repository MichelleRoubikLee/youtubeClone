import React from 'react';
import CommentBox from '../CommentBox/commentBox';

const CommentList = ({comments, currentVideoId}) => {
  const renderedComments = comments.map((comment, i) => {
    if(currentVideoId === comments[i].videoId){
    return <CommentBox key={comments[i++]} text={comments[i].text} likes={comments[i].likes}/>
    }else{
      return false;
    }
  });
  return <div className="container-fluid comment-list">{renderedComments}</div>
  };
  
  export default CommentList;