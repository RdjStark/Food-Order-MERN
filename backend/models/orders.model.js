const mongoose = require("mongoose"),
Schema = mongoose.Schema;

const ordersSchema = new Schema({
    total_amount: { type: Number, required: true },
}, {
  timestamps: true,
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
