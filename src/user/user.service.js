const userSchema = require("./user.schema");

const getUsers = async (req, res) => {
  try {
    const { name } = req.query;

    const filters = {};

    if (name) {
      filters.name = name;
    }

    const user = await userSchema.find(filters);

    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userSchema.findById(id);

    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await userSchema.create({
      name: name,
      age: age,
      email: email,
    });

    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, age } = req.body;
    const user = await userSchema.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          name: name,
          age: age,
          email: email,
        },
      }
    );

    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userSchema.deleteOne({
      _id: id,
    });

    res.json({ message: "User deleted", user });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  editUser,
  removeUser,
};
