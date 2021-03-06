const { validationResult } = require('express-validator/check');

const Post = require('../models/post');
exports.getPosts = (req, res, next) => {
    Post.find()
        .then(posts => {
            res.status(200).json({message: 'Fetched Posts Successfully.', posts: posts});

        })
        .catch(err=>{
            if(!err.statusCode) {
                err.statusCode = 500;
        }
        next(err);
    });
    // res.status(200).json({
    //     posts: [
    //         {
    //             _id: '1',
    //             title: 'What is ewaste?', 
    //             content: 'This is the first post',
    //             createdAt: new Date()
    //         }
    //     ]
    // });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({message: 'Validation failed, entered data is incorrect.', errors: errors.array()
        });
    }
    const title = req.body.title;
    const content = req.body.content;
    
    const post = new Post({
        title: title,
        content: content
    });
    post.save()
    .then(result => {
        res.status(201).json({
            message: 'Post created successfully',
            post: result
        });
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

    
};

exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId)
        .then(post => {
            if(!post) {
                const error = new Error('Could not find post.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({message: 'post fetched', post: post});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId)
        .then(post => {
            if(!post) {
                const error = new Error('Could not find post.');
                error.statusCode = 404;
                throw error;
            }
            return Post.findByIdAndRemove(postId);
        })
        .then(result => {
            console.log(result);
            res.status(200).json({ message: 'Deleted Post'});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};