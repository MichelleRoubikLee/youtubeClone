const Comment = require('../models/comment');
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const comment = new Comment ({
            videoId: req.body.videoId,
            text: req.body.text
        });

        await comment.save();

        return res.send(comment);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;
