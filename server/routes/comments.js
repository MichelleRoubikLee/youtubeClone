const {Comment, validateComment} = require('../models/comment');
const {Reply, validateReply} = require('../models/reply');
const express = require('express');
const router = express.Router();

//comment endpoints
router.get('/', async(req,res) => {
    try{
        const comments = await Comment.find();
        return res.send(comments);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

router.post('/', async (req,res) => {
    try {
        const { error } = validateComment(req.body);
        if(error) {
            return res.status(400).send(error);
        }
        const comment = new Comment ({
            videoId: req.body.videoId,
            text: req.body.text,
            replies: []
        });
        await comment.save();
        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//reply endpoints



module.exports = router;
