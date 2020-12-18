const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    videoId: {type: String},
    likes: {type: Number},
})
