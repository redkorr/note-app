import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger-output.json';

import bodyParser from 'body-parser';

import { PrismaClient } from '../generated/prisma';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const prisma = new PrismaClient();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//
// app.get('/db', async (req, res) => {
//   const count = await prisma.user.count();
//   res.json({ count });
// });

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
