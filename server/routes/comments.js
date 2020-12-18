const Comment = require('../models/products');
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const comment = new Comment ({
            videoId: 'H6t3wr7wARk',
            text: 'Hello World'
        });

        await comment.save();

        return res.send(product);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;
