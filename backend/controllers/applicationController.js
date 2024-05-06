const applicationModel = require("../models/applicationModel.js");
const jobsModel = require("../models/jobsModel.js");

const createPost  = async (req, res) => {
  res.status(200).json("Success");
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await jobsModel.find();
  res.status(200).json(posts);

  } catch (error) {
    next(createError(500, "Can not get posts"));
  }
}
  
const getPost = async(req,res) =>{
  const { id } = req.params;
  try {
    const post = await jobsModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    next(createError(500, "Can not get post"));
  }
}
module.exports = {createPost, getAllPosts, getPost};