const { add_expense, get_expenses, delete_expense } = require('../controllers/expense');
const { add_income, get_incomes, delete_income } = require('../controllers/income');
const router = require('express').Router();

router.post('/add-income', add_income)
    .get('/get-incomes', get_incomes)
    .delete('/delete-income/:id', delete_income)
    .post('/add-expense', add_expense)
    .get('/get-expenses', get_expenses)
    .delete('/delete-expense/:id', delete_expense)
    

module.exports = router;