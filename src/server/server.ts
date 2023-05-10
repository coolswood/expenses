import express from 'express';
const app = express();
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

app.use(
    cors({
        origin: 'http://localhost:3333',
    }),
);

app.use(express.json());

const prisma = new PrismaClient();

async function main() {}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

const chartWeekHistory = [120, 150, 80, 70, 110, 130];
// This data should be cached in the key/value database. For example, in Reddis. But I limited myself to storing it in a normal object, just to show the principle
let currentMonth = 0;

app.get('/init/graph', async (req, res) => {
    const expenses = await prisma.expense.findMany();

    expenses.forEach(expense => {
        currentMonth += Number(expense.amount);
    });

    res.status(200).json({ chartWeekScores: [...chartWeekHistory, currentMonth] });
});

app.get('/init/expenses', async (req, res) => {
    const expenses = await prisma.expense.findMany();

    res.status(200).json({ expenses });
});

app.post('/expenses', async (req, res) => {
    const randomId = Math.random().toString(36).substring(7);

    const { description, amount } = req.body;

    await prisma.expense.create({
        data: {
            id: randomId,
            description,
            amount,
        },
    });

    const expenses = await prisma.expense.findMany();

    currentMonth += parseInt(amount);

    res.status(200).json({ expenses, chartWeekScores: [...chartWeekHistory, currentMonth] });
});

app.patch('/expenses', async (req, res) => {
    const { description, amount, id } = req.body;

    const expensePrev = await prisma.expense.findUnique({
        where: {
            id,
        },
    });

    if (expensePrev !== null) {
        currentMonth = currentMonth - parseInt(expensePrev.amount) + parseInt(amount);
    }

    await prisma.expense.update({
        where: {
            id,
        },
        data: {
            description,
            amount,
        },
    });

    const expenses = await prisma.expense.findMany();

    res.status(200).json({ expenses, chartWeekScores: [...chartWeekHistory, currentMonth] });
});

app.delete('/expenses', async (req, res) => {
    const { id } = req.body;

    const expensePrev = await prisma.expense.findUnique({
        where: {
            id,
        },
    });

    if (expensePrev !== null) {
        currentMonth = currentMonth - parseInt(expensePrev.amount);
    }

    await prisma.expense.delete({
        where: {
            id,
        },
    });

    const expenses = await prisma.expense.findMany();

    res.status(200).json({ expenses, chartWeekScores: [...chartWeekHistory, currentMonth] });
});

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});
