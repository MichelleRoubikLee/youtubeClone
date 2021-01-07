import React, {Component} from 'react';
import axios from 'axios';
import AddComment from '../AddComment/addComment';
import CommentList from '../CommentList/commentList';

class CommentSection extends Component {
    constructor(){
        super()
        this.state = {
            comments: [],
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
        return(
            <div>
            <AddComment/>
            <br></br>
            <br></br>
            <CommentList comments={this.state.comments}/>
            </div>
        )
    }  
}

export default CommentSection;