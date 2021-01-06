const {Comment, validateComment} = require('../models/comment');
const {Reply, validateReply} = require('../models/comment');
const express = require('express');
const router = express.Router();



//get all comments and and replies in db
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
        const video = await Comment.find({videoId: req.params.videoId});
        if (!video)
            return res.status(400).send(`The video with id "${req.params.videoId}" does not exist.`);
        return res.send(video);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

//delete comment
router.delete('/:commentId', async (req,res) => {
    try{
        const comment = await Comment.findByIdAndRemove(req.params.commentId);
        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);
        return res.send(comment);

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
//update comment
router.put('/:commentId', async (req,res) => {
    try{
        const { error } = validateComment(req.body);
        if(error) {
            return res.status(400).send(error);
        }

        const comment = await Comment.findByIdAndUpdate(
            req.params.commentId,
            {
                videoId: req.body.videoId,
                text: req.body.text
            },
            { new: true}
        );
        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);

    await comment.save();
    return res.send(comment);

    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

//post reply to specific comment
router.put('/:commentId', async (req,res) => {
    try{
        const { error } = validateReply(req.body);
        if(error) {
            return res.status(400).send(error);
        }
        const reply = new Reply ({
            text: req.body.text
        });
        const comment = await Comment.findByIdAndUpdate(
            req.params.commentId,
            {
                replies: reply
            },
            { new: true}
        );
        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);

    await comment.save();
    return res.send(comment);

    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

//add like to comment
router.put('/:commentId/like', async (req,res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(
            req.params.commentId,
            {$inc: {likes: 1}
            },
            { new: true}
        );
        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);

    await comment.save();
    return res.send(comment);

    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

//add dislike to comment
router.put('/:commentId/dislike', async (req,res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(
            req.params.commentId,
            {$inc: {dislikes: 1}
            },
            { new: true}
        );
        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);

    await comment.save();
    return res.send(comment);

    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});

module.exports = router;
