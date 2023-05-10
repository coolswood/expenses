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

app.get('/init/list', (req, res) => {
  console.log(req);
  res.status(200).json([
    {
      id: '1',
      amount: '100',
      description: 'test',
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
