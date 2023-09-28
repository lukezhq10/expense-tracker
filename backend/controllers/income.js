const mongoose = require('mongoose');
const Income = require('../models/incomeModel');


const add_income = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = new Income({
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
        await income.save()
        res.status(200).json({
            message: 'Income Added'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }

    console.log(income)

}

const get_income = async (req, res) => {
    try {
        const incomes = await Income.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        })
    }
}

const delete_income = async (req, res) => {
    const { id } = req.params;
    Income.findByIdAndDelete(id)
        .then(income => {
            res.status(200).json({
                message: 'Income Deleted'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Server Error'
            })
        })
}

module.exports = {
    add_income,
    get_income,
    delete_income
};