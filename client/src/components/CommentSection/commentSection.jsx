import React, {Component} from 'react';
import axios from 'axios';
import CommentList from '../CommentList/commentList';
import AddComment from '../AddComment/addComment';

class CommentSection extends Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            comment: ''
        }
    }

    componentDidMount() {
        this.updateComments();
    }

    updateComments(){
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
            <div className="commentSection">
				<AddComment video={this.props.video} updateComments={() => this.updateComments()}/>
				<CommentList 
				currentVideoId={this.props.video.id.videoId} 
				comments={this.state.comments}
				updateComments={() => this.updateComments()}
				/>
            </div>
        )
    }  
}

export default CommentSection;