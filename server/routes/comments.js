const {Comment, validateComment} = require('../models/comment');
const {Reply, validateReply} = require('../models/comment');
const express = require('express');
const router = express.Router();



//comment endpoints

//get all comments and ids in db
router.get('/', async(req,res) => {
    try{
        const comments = await Comment.find();
        return res.send(comments);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

//find comments and replies by videoId
router.get('/:videoId', async(req,res) => {
    try{
        const videoData = await Comment.findById(req.params.videoId);
        return res.send(videoData);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

//post comment to specific videoid
router.post('/', async (req,res) => {
    try {
        const { error } = validateComment(req.body);
        if(error) {
            console.log(req.body);
            console.log(error);
            return res.status(400).send(error);
        }
        const comment = new Comment ({
            videoId: req.body.videoId,
            text: req.body.text,
            replies: []
        });
        await comment.save();
        return res.send(comment);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});


//reply endpoints

//get reply to specific comment
// router.get('/:commentId', async (req, res) =>{
//     try {
//         const commentData = await Reply.findById(req.params.commentId);
//         return res.send(commentData);
//     } catch(error){
//         return res.status(500).send(`Internal Server Error: ${error}`);
//     }
// });

//get all comments and ids in db
router.get('/replies', async(req,res) => {
    try{
        const replies = await Reply.find();
        return res.send(replies);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});


//post reply to specific comment
router.post('/:commentId', async (req,res) => {
    try {
        const { error } = validateReply(req.body);
        if(error) {
            return res.status(400).send('hello' + error);
        }
        const reply = new Reply ({
            text: req.body.text
        });
        await reply.save();
        return res.send(reply);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;
