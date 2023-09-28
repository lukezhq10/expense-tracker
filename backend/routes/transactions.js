const { add_expense, get_expense, delete_expense } = require('../controllers/expense');
const { add_income, get_income, delete_income } = require('../controllers/income');
const router = require('express').Router();

router.post('/add-income', add_income)
    .get('/get-income', get_income)
    .delete('/delete-income/:id', delete_income)
    .post('/add-expense', add_expense)
    .get('/get-expense', get_expense)
    .delete('/delete-expense/:id', delete_expense)
    

module.exports = router;