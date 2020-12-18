const mongoose = require('mongoose');
const Joi = require('joi');

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
const Reply = mongoose.model('Reply', replySchema);

function validateComment(comment) {
    const schema = Joi.object({
        videoId: Joi.string().required(),
        likes: Joi.number(),
        dislikes: Joi.number,
        text: Joi.string().min(2).max(255).required(),
    });
    return schema.validate(comment);
}

function validateReply(reply){
    const schema = Joi.object({
        likes: Joi.number(),
        dislikes: Joi.number,
        text: Joi.string().min(2).max(255).required()
    });
    return schema.validate(reply);
}

exports.Comment = Comment;
exports.Reply = Reply;
exports.validateComment = validateComment;
exports.validateReply = validateReply;
exports.commentSchema = commentSchema;
exports.replySchema = replySchema;