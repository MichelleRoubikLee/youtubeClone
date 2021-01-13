import React from 'react';
import './commentBox.css';
import axios from 'axios';

//LKz7mVBrWh8 example video

class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            replies: this.props.comment.replies,
            replyInput: "",
            commentReply: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleReply = this.handleReply.bind(this);
    }



    replyExists(replies){
        if(replies){
            return(this.state.replies[0].text)
        }
    }

    handleLike = (event) => {
        event.preventDefault();
        let commentId = this.props.comment._id;

        axios({
          method: 'put',
          url: 'http://localhost:5000/api/comments/' + commentId + '/like',

        }).then(() => {
            this.props.updateComments();
        })

    }
    
    handleDislike = (event) => {
        event.preventDefault();
        let commentId = this.props.comment._id;
        
        axios({
          method: 'put',
          url: 'http://localhost:5000/api/comments/' + commentId + '/dislike',
        }).then(() => {
            this.props.updateComments();
            //this.replyExists();
        })
    }
    
    pushReply(replyInput){
        let commentId = this.props.comment._id;
        console.log("handleReply")
        axios({
          method: 'put',
          url: 'http://localhost:5000/api/comments/' + commentId + '/reply',
          data: {
            text: replyInput
          }
        }).then(() => {
            this.props.updateComments();
        })
    }

    handleReply(event){
        event.preventDefault();
        this.pushReply(this.state.replyInput);
        this.props.updateComments();
    }
   
    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        })
    }

    render(){
        return(
            <div className="comment-box">
                <p>{this.props.text}</p>
                <div>
                    <button className="thumbs-up" onClick={this.handleLike}></button>{this.props.comment.likes}
                    <button className="thumbs-down" onClick={this.handleDislike}></button>{this.props.comment.dislikes}
                    <form onSubmit={this.handleReply} className="form-floating">
                        <label htmlFor="textBox">Reply</label>
                        <div>{this.replyExists(this.state.replies[0])}</div>
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