const mongoose = require ('mongoose')

const orderSchema = new mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User"
    },
  
    totalPrice: {
      type: Number,
      required: true
    },
  
    foods: [{
        type : mongoose.Schema.Types.ObjectId,
        required : true, 
        ref:"Food"
    }],
  
    orderDate: {
      type: Date,
      default: Date.now()
    },
  
    isAccepted: {
      type: Boolean,
      default: false
    },
  
    paymentMethod: {
      type: String,
      required: true
    },

    isEnded : {
      type: Boolean,
      default : false
    }
});

module.exports = mongoose.model("Order", orderSchema);