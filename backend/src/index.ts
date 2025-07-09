import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger-output.json';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
import errorHandler from './middlewares/errorMiddleware.js';

const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
