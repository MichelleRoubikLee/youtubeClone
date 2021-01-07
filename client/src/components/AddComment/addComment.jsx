import React from 'react';
import './addComment.css'

const AddComments = ({change, submit}) => {
    return (
            <form onSubmit={submit} className="form-floating">
                <label htmlFor="floatingTextarea2">Comments</label>
                <textarea onChange={change} className="form-control" placeholder="Add a comment" id="floatingTextarea2" style={{height:"100px"}}></textarea>
                <button className="btn-sm" type="submit">Add</button>
            </form>
        )
    }
    

export default AddComments;