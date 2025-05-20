import express from 'express';

import bodyParser from 'body-parser';

import { PrismaClient } from '../generated/prisma';

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

const prisma = new PrismaClient();

app.get('/db', async (req, res) => {
  const count = await prisma.user.count();
  res.json({ count });
});

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
