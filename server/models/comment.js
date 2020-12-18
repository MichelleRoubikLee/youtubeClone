const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    text: {type: String, required: true},
    postDate: {type: Date, default: Date.now()}
});

const commentSchema = new mongoose.Schema({
    videoId: {type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    text: {type: String, required: true, minlength: 2, maxlength: 255 },
    postDate: {type: Date, default: Date.now()},
    replies: [replySchema]
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;