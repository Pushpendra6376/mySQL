// routes/expenses.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/exprenseController');

// add expense
router.post('/', expenseController.createExpense);

// Get all expense
router.get('/', expenseController.getExpenses);

//edit expense
router.put('/:id', expenseController.updateExpense);

// Delete expense
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
