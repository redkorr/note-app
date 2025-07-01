import { Router } from 'express';
import typeRouter from './type/index.js';
import labelRouter from './label/index.js';
import itemRouter from './item/index.js';

const router = Router();

router.use('/types', typeRouter);
router.use('/labels', labelRouter);
router.use('/items', itemRouter);

export default router;
