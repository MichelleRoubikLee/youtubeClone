const {Reply, validateReply} = require('../models/reply');
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const { error } = validateReply(req.body);
        if(error) {
            return res.status(400).send(error);
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
