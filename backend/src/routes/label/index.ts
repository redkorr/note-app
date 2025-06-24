import { Router } from 'express';
import { PrismaClient } from '../../../generated/prisma';
import { Request, Response, NextFunction } from 'express';

const router = Router();

const prisma = new PrismaClient();

router.get(
  '/:itemId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await prisma.label.findMany({
        where: {
          Item: {
            some: {
              id: req.params.itemId,
            },
          },
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bgColor, textColor, name, projectId } = req.body;
    await prisma.label.create({
      data: {
        bgColor,
        textColor,
        name,
        projectId,
      },
    });
    res.status(200).json();
  } catch (error) {
    next(error);
  }
});

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.label.delete({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json();
    } catch (error) {
      next(error);
    }
  }
);

export default router;
