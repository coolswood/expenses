import express from 'express';
const app = express();
import cors from 'cors';

app.use(
  cors({
    origin: 'http://localhost:3333',
  }),
);

app.use(express.json());

const PORT = 5001;

type expenseType = {
  id: string;
  amount: string;
  description: string;
};

let expenses: expenseType[] = [];
const chartWeekHistory = [120, 150, 80, 70, 110, 130];
let chartTodayScore = 0;

app.get('/init/graph', (req, res) => {
  res.status(200).json({ chartWeekScores: [...chartWeekHistory, chartTodayScore] });
});

app.get('/init/expenses', (req, res) => {
  res.status(200).json({ expenses });
});

app.post('/expenses', async (req, res) => {
  const randomId = Math.random().toString(36).substring(7);

  const { description, amount } = req.body;

  expenses.push({
    id: randomId,
    description,
    amount,
  });

  chartTodayScore += parseInt(amount);

  res.status(200).json({ expenses, chartWeekScores: [...chartWeekHistory, chartTodayScore] });
});

app.patch('/expenses', async (req, res) => {
  const { description, amount, id } = req.body;

  const itemIndex = expenses.findIndex(item => item.id === id);

  chartTodayScore = chartTodayScore - parseInt(expenses[itemIndex].amount) + parseInt(amount);

  expenses[itemIndex] = {
    id,
    description,
    amount,
  };

  res.status(200).json({ expenses, chartWeekScores: [...chartWeekHistory, chartTodayScore] });
});

app.delete('/expenses', async (req, res) => {
  const { id } = req.body;

  chartTodayScore = chartTodayScore - parseInt(expenses.find(item => item.id === id)!.amount);

  expenses = expenses.filter(item => item.id !== id);

  res.status(200).json({ expenses, chartWeekScores: [...chartWeekHistory, chartTodayScore] });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
