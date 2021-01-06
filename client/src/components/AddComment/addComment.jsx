import React from 'react';
import './addComment.css'

const Comments = () => {
    return (
        <div className="comments">
            <div className="form-floating">
                <label htmlFor="floatingTextarea2">Comments</label>
                <textarea className="form-control" placeholder="Add a comment" id="floatingTextarea2" style={{height:"100px"}}></textarea>
                <button className="btn-sm">Add</button>
            </div>
        </div>
    )
}

export default Comments