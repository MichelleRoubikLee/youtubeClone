import React from 'react';
import CommentBox from '../CommentBox/commentBox';

const CommentList = ({comments, currentVideoId, handleLike, handleDislike, handleReply}) => {
  const renderedComments = comments.map((comment, i) => {
    if(currentVideoId === comments[i].videoId){
      return (<CommentBox 
        //key={comments[i]} 
        text={comments[i].text} 
        likes={comments[i].likes}
        dislikes={comments[i].dislikes}
        comment = {comments[i]}
        // handleLike = {handleLike}
        // handleDislike = {handleDislike}
        // handleReply = {handleReply}
      />)
    }
  });
  return <div className="container-fluid comment-list">{renderedComments}</div>
  };
  
  export default CommentList;