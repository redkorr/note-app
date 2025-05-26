import { Router } from 'express';
import typeRouter from './type/index.js';

const router = Router();

router.use('/type', typeRouter);

export default router;
