import React from 'react';
import './commentBox.css';
import axios from 'axios';

//sX8GgDgjq00 example video

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.comment.likes,
            dislikes: this.props.comment.dislikes,
            // replies: ;
            commentId: this.props.comment._id
        };

    }
    handleLike = (event) => {
        event.preventDefault();
        let commentId = this.state.commentId;

        axios({
          method: 'put',
          url: 'http://localhost:5000/api/comments/' + commentId + '/like',
        })
    }
    
    handleDislike = (event) => {
        event.preventDefault();
        let commentId = this.state.commentId;
        
        axios({
          method: 'put',
          url: 'http://localhost:5000/api/comments/' + commentId + '/dislike',
        })
    }
    
    handleReply = (event) => {
        event.preventDefault();
        let commentId = this.state.commentId;
        console.log("handleReply")
        // axios({
        //   method: 'put',
        //   url: 'http://localhost:5000/api/comments/' + commentId + '/reply',
        //   data: {
        //     text: replyText
        //   }
        // })
    }
   
    // showReplyForm(){

    // }

    render(){
    
        return(
            <div className="comment-box">
                <p>{this.props.text}</p>
                <div>
                    <button className="thumbs-up" onClick={this.handleLike}></button>{this.state.likes}
                    <button className="thumbs-down" onClick={this.handleDislike}></button>{this.state.dislikes}
                    <button className="reply" onClick={this.handleReply}>REPLY</button>
                </div>
            </div>
        )
    }
    
}

export default CommentBox;