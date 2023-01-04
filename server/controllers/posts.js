import Post from "../models/Post.js"
import User from "../models/User.js";

/* create */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: []
    })
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    res.status(403).json({message: error.message})
  }
}

/* read */
export const getFeedPosts = async (req, res) => {
  try {
    
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}
/* create */