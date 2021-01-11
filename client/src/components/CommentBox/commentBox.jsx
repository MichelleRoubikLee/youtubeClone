import React from 'react';
import './commentBox.css';
import axios from 'axios';

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // likes: ;
            // dislikes: ;
            // replies: ;
            //commentId= ;
        };

        // this.handleLike = this.handleLike.bind(this);
        // this.handleDislike = this.handleDislike.bind(this);
        // this.handleReply = this.handleReply.bind(this);
    }

    handleLike(event){
        event.preventDefault();
        
        // axios({
        //     method: 'put',
        //     url: 'http://localhost:5000/api/comments/' + commentId + '/like',
        // })
    }

    handleDisike(event){
        event.preventDefault();
        
        // axios({
        //     method: 'put',
        //     url: 'http://localhost:5000/api/comments/' + commentId + '/dislike',
        // })
    }

    handleReply(event){
        event.preventDefault();
        // axios({
        //     method: 'put',
        //     url: 'http://localhost:5000/api/comments/' + commentId + '/reply',
        //     data: {
        //         text: replyText
        //     }
        // })
    }

    showReplyForm(){

    }

    render(){
        return(
            <div className="comment-box">
                <p></p>
                <div>
                    <button className="thumbs-up" onclick={this.handleLike}></button>
                    <button className="thumbs-down" onclick={this.handleDislike}></button>
                    <button className="reply" onclick={this.handleReply}>REPLY</button>
                </div>
            </div>
        )
    }
    
}

export default CommentBox;