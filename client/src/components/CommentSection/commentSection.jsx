import React, {Component} from 'react';
import axios from 'axios';
import AddComment from '../AddComment/addComment';
import CommentList from '../CommentList/commentList';

class CommentSection extends Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            comment: ''
        }
    }

    handleChange = event => {
      this.setState({comment:event.target.value})
    }

    handleSubmit = event => {
      event.preventDefault();
      const myComment = {
        text: this.state.comment,
        videoId: this.props.currentVideo.id.videoId
      };

      axios.post('http://localhost:5000/api/comments', {myComment})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/comments')
        .then(res => {
          const comments = res.data;
          this.setState({
            comments
          });
        })
      }
    
    render(){
        return(
            <div>
            <AddComment change={this.handleChange} submit={this.handleSubmit}/>
            <br></br>
            <br></br>
            <CommentList comments={this.state.comments}/>
            </div>
        )
    }  
}

export default CommentSection;