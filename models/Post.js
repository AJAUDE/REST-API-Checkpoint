//  import mongoose
const mongoose = require('mongoose');

// create a schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        required: true,
        default: "https://www.wpbeginner.com/wp-content/uploads/2017/08/fallbackthumbnail.png"
    },
    likes: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
    },
}, { timestamps: true });

// creat a model 
const post =mongoose.model("post", PostSchema);
module.exports = post;