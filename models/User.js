const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{6,12}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
    username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{6,12}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
    username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{6,12}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
      username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{6,12}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
      username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{6,12}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  },
  },
});

module.exports = mongoose.model('User', userSchema);
