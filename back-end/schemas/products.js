const mongoose = require('mongoose');
const { Schema } = mongoose;

const products = new Schema({
  title: String,
  description: String,
  image: String,
  price: Number
});

module.exports = mongoose.model("products", products);