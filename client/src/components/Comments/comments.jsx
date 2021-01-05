import React from 'react';
import './comments.css'

const Comments = () => {
    return (
        <div className="comments">
            <div className="form-floating">
                <label for="floatingTextarea2">Comments</label>
                <textarea className="form-control" placeholder="Add a comment" id="floatingTextarea2" style={{height:"100px"}}></textarea>
            </div>
        </div>
    )
}

export default Comments