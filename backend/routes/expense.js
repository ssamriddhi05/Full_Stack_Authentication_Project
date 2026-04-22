// routes/expense.js
const router = require("express").Router();
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");

// Add Expense
router.post("/expense", auth, async (req, res) => {
  const expense = new Expense({
    userId: req.user.id,
    ...req.body,
  });

  await expense.save();
  res.send("Expense Added");
});

// Get Expenses
router.get("/expenses", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.id });
  res.json(expenses);
});

router.get("/expense-test", (req, res) => {
  res.send("Expense route working");
});

module.exports = router;
