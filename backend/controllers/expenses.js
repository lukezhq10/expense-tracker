const mongoose = require('mongoose');
const Expense = require('../models/expense');


const add_expense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const expense = new Expense({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        if (amount <= 0 || isNaN(amount)) {
            return res.status(400).json({
                message: 'Amount must be a positive number'
            })
        }
        await expense.save()
        res.status(200).json({
            message: 'Expense Added'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }

    console.log(expense)

}

const get_expenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }
}

const delete_expense = async (req, res) => {
    const { id } = req.params;
    Expense.findByIdAndDelete(id)
        .then(expense => {
            res.status(200).json({
                message: 'Expense Deleted'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Server Error'
            })
        })
}

module.exports = {
    add_expense,
    get_expenses,
    delete_expense
};