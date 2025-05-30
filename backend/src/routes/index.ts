import { Router } from 'express';
import typeRouter from './type/index.js';
import labelRouter from './label/index.js';

const router = Router();

router.use('/types', typeRouter);
router.use('/labels', labelRouter);

export default router;
