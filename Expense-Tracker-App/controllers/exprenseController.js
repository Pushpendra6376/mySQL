const Expense = require('../models/expense');

const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date, userId } = req.body;

    if (!title || amount === undefined) {
      return res.status(400).json({ message: 'title and amount are required' });
    }

    const expense = await Expense.create({
      title,
      amount,
      category: category || null,
      date: date || new Date(),
      userId: userId || null
    });

    return res.status(201).json(expense);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    // Optional: if you pass userId as query param, filter by user
    const { userId } = req.query;
    const where = {};
    if (userId) where.userId = userId;

    const expenses = await Expense.findAll({
      where,
      order: [['date', 'DESC']]
    });

    return res.status(200).json(expenses);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const rows = await Expense.destroy({ where: { id } });

    if (!rows) return res.status(404).json({ message: 'Expense not found' });

    return res.status(200).json({ message: 'Expense deleted' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, amount, category, date } = req.body;

    const [updatedCount] = await Expense.update(
      { title, amount, category, date },
      { where: { id } }
    );

    if (!updatedCount) return res.status(404).json({ message: 'Expense not found or no changes' });

    const updated = await Expense.findByPk(id);
    return res.status(200).json(updated);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
  updateExpense
};
