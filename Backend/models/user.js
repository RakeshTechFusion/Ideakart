const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email id already"],
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

const users = model("users", usersSchema);

module.exports = users;
