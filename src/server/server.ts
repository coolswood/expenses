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

    res.status(200).json({ expenses });
});

app.patch('/expenses', async (req, res) => {
    const { description, amount, id } = req.body;

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

    res.status(200).json({ expenses });
});

app.delete('/expenses', async (req, res) => {
    const { id } = req.body;

    await prisma.expense.delete({
        where: {
            id,
        },
    });

    const expenses = await prisma.expense.findMany();

    res.status(200).json({ expenses });
});

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});
