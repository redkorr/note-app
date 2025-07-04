import { Router } from 'express';
import typeRouter from './type/index.js';
import labelRouter from './label/index.js';
import itemRouter from './item/index.js';
import listRouter from './list/index.js';
import projectRouter from './project/index.js';

const router = Router();

router.use('/types', typeRouter);
router.use('/labels', labelRouter);
router.use('/items', itemRouter);
router.use('/lists', listRouter);
router.use('/projects', projectRouter);

export default router;
