import React from 'react';
import './addComment.css';
import axios from 'axios';

class AddComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentInput: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        })
        //console.log(event.target.value)
    }

    handleSubmit(event){
        event.preventDefault();
        // console.log(this.state.commentInput);
        this.pushComment(this.state.commentInput);
    }

    pushComment(commentInput){
        console.log(this.state.commentInput);
        const videoId = this.props.currentVideo.id.videoId;
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/comments',
            data: {
                videoId: videoId,
                text: commentInput
            }
        })
    }


    render(){
        return (
            <div className="comments">
                <form onSubmit={this.handleSubmit} className="form-floating">
                    <label htmlFor="textBox">Comments</label>
                    <input 
                        name="commentInput" 
                        type="text" 
                        id="textBox"
                        className="form-control text-box" 
                        placeholder="Add a comment" 
                        onChange={this.handleChange} 
                    >
                    </input>
                    <button type="submit" className="btn-sm">Add</button>
                </form>
            </div>
        )
    }
    

export default AddComments;