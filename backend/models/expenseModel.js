const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    title: { 
        type: String, 
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    },
    type: {
        type: String,
        default: 'expense'
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }

}, {timestamps: true})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;