const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//mongoose schema

const cust = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  balance: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Customer = mongoose.model('Customer', cust);
                        
module.exports = Customer;