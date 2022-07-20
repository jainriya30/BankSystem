const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//mongoose schema

const trans = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Transaction = mongoose.model('Transaction', trans);

module.exports = Transaction;