import React from 'react';
import './addComment.css'

class AddComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentInput: ""
        };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    
    handleChange(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        })
        console.log(event.target.value)
    }

    
    render(){
        return (
            <div className="comments">
                <div className="form-floating">
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
                    <button className="btn-sm">Add</button>
                </div>
            </div>
        )
    }
    
}

export default AddComments