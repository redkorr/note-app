import { Router, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../../../generated/prisma';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.type.findMany({});
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      next(error);
    }
  }
});

export default router;
