// CRUD operation

const express = require('express');
const router = express.Router();

// import the post model
const Post = require("./models/Post");

// get all posts 
router.get('/posts', async (req, res) => {
    const posts = await Post.find();

    // send the posts as response and success status 
    res.send(posts);
});
// Create a new post 
router.post('/posts', async (req, res) => {
    // create a new post 
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        postImage: req.body.postImage,
        tags:req.body.tags
    });

    // save the post to database
    await post.save();

    // send back a response
    res.send(post);

});

// get single post 
router.get('/posts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        // check if post is found
        if (!post) {
            return res.status(404).send({ error: "post not found"});
        }
        // send back a response
        res.send(post);
    } catch {error} {
        console.log(error);
    } 
});
// update a post
router.put('/posts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findByIdAndUpdate(id, {
            title: req.body.title,
            content: req.body.content,
            postImage: req.body.postImage,
            tags: req.body.tags
        });

        // check if post is found   
        if (!post) {
            return res.status(404).send({ error: "Post not found" });
        }

        // send back a response
        res.send(post);
    } catch (error) {
        console.log(error);
    }
});

// delete a post
router.delete('/posts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findByIdAndDelete(id);

        // check if post is found   
        if (!post) {
            return res.status(404).send({ error: "Post not found" });
        }

        // send back a response
        res.send(post);
    } catch (error) {
        console.log(error);
    }
});




// export the router
module.exports = router;