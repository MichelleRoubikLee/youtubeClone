import React from 'react';
import CommentBox from '../CommentBox/commentBox';

const CommentList = ({comments}) => {
    const renderedComments = comments.map((comment, i) => {
      return <CommentBox key={comments[i++]} text={comments[i].text} likes={comments[i].likes}/>
    });
  
    return <div className="container-fluid comment-list">{renderedComments}</div>
  };
  

export default CommentList;