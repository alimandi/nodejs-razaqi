const postSchema = require("./post.schema");
const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postSchema
      .findById(id)
      .populate(["createBy", "coverId"]);

    res.json({
      message: "sucsess",
      posts: { post },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await postSchema.find().populate("coverId");

    res.json({
      message: "sucsess",
      posts: { posts },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const addPost = async (req, res) => {
  try {
    const { title, description, coverId } = req.body;

    const post = await postSchema.create({
      title,
      description,
      createAt: new Date(),
      createBy: req.headers._id,
      coverId,
    });

    res.json({
      message: "sucsess",
      posts: { post },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, coverId } = req.body;
    const post = await postSchema.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          title,
          description,
          updateAt: new Date(),
          createBy: req.user._id,
          coverId,
        },
      }
    );

    res.json({
      message: "sucsess",
      posts: { post },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const removePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postSchema.deleteOne({
      _id: id,
    });

    res.json({
      message: "sucsess",
      posts: { post },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  getPost,
  addPost,
  editPost,
  removePost,
};
