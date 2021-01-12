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
            replies: this.props.comment.replies,
            replyInput: "",
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
    
    

    pushReply(replyInput){
        let commentId = this.state.commentId;
        console.log("handleReply")
        axios({
          method: 'put',
          url: 'http://localhost:5000/api/comments/' + commentId + '/reply',
          data: {
            text: replyInput
          }
        })
    }

    handleReply(event){
        event.preventDefault();
        this.pushReply(this.state.replyInput);
    }
   
    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        })
        //console.log(event.target.value)
    }

    render(){
        console.log(this.state.replies);
        // const {likes,dislikes,text,_id,replies} = this.props.comment;
        // console.log(likes,dislikes,text,_id,replies);
        return(
            <div className="comment-box">
                <p>{this.props.text}</p>
                <div>
                    <button className="thumbs-up" onClick={this.handleLike}></button>{this.state.likes}
                    <button className="thumbs-down" onClick={this.handleDislike}></button>{this.state.dislikes}
                    <form onSubmit={this.handleReply} className="form-floating">
                        <label htmlFor="textBox">Reply</label>
                        {/* <div>{this.state.replies}</div> */}
                        <input 
                            name="replyInput" 
                            type="text" 
                            id="textBox"
                            className="form-control text-box" 
                            placeholder="Reply to Comment" 
                            onChange={this.handleChange} 
                        >
                        </input>
                        <button className="reply" onClick={this.handleReply}>REPLY</button>
                    </form>
                    
                </div>
            </div>
        )
    }
    
}

export default CommentBox;