import React, {Component} from 'react';
import axios from 'axios';
import CommentList from '../CommentList/commentList';

class CommentSection extends Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            comment: ''
        }
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
      if (!this.props.video) {
        return (
            <div>
            </div>
        )
    }
        return(
            <div>
            <br></br>
            <br></br>
            <CommentList currentVideoId={this.props.video.id.videoId} comments={this.state.comments}/>
            </div>
        )
    }  
}

export default CommentSection;