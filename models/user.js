const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum:{
        values : ["costumer", "admin" , "chef"]
    },
    default: "costumer",
  },
});

module.exports = mongoose.model("User", userSchema);