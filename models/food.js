const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
      },
      price: {
        type: Number,
        required: true,
        default: 15.0,
      }    
});

module.exports = mongoose.model("Food", foodSchema);