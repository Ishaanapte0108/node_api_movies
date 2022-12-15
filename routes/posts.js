const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//CREATE 
router.post('/', async (req,res)=>{
  //console.log(req.body);
  const post = new Post({
    name: req.body.name,
    img: req.body.img,
    summary: req.body.summary
  });

  try{
  const savedPost =await post.save();
  res.json(savedPost);
  }
  catch(err){
    res.json({message: err});
  }

});

//READ
router.get('/', async (req,res)=>{
  try {
    const posts =await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({message:err});
  }
});

//READ SPECIFIC
router.get('/:postId', async (req,res)=>{
  try {
    const post = await Post.findById({_id: req.params.postId});
    res.json(post);
  } catch (err) {
    res.json({message:err});
  }
});

//UPDATE
router.patch('/:postId',async (req,res)=>{
  try {
    const updatedPost = await Post.updateOne({_id: req.params.postId},
      {$set: {
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary
      }});
    res.json(updatedPost);
  } catch (err) {
    res.json({message:err});
  }
});

//DELETE
router.delete('/:postId', async (req,res)=>{
  try {
    const removedPost = await Post.remove({_id: req.params.postId});
  } catch (err) {
    res.json({message:err});
  }
});

module.exports = router; 