import { Router, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../../../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

router.get(
  '/:projectId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await prisma.list.findMany({
        where: {
          projectId: req.params.projectId,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      if (error) {
        next(error);
      }
    }
  }
);

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  try {
    await prisma.list.create({
      data: {
        name: data.name,
        description: data.description,
        projectId: data.projectId,
      },
    });
    res.status(200).json();
  } catch (error) {
    next(error);
  }
});

router.delete(
  '/:listId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.list.delete({
        where: {
          id: req.params.listId,
        },
      });
      res.status(200).json();
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:listId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await prisma.list.update({
        where: {
          id: req.params.listId,
        },
        data: data,
      });
      res.status(200).json();
    } catch (error) {
      next(error);
    }
  }
);
export default router;
