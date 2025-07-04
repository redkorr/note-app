import { Router, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../../../generated/prisma';

const router = Router();

const prisma = new PrismaClient();

router.get(
  '/:userId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await prisma.project.findMany({
        where: {
          OR: [
            {
              owner: req.params.userId,
            },
            {
              members: {
                has: req.params.userId,
              },
            },
            {
              admins: {
                has: req.params.userId,
              },
            },
          ],
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
  const { name, owner, description } = req.body;

  try {
    await prisma.project.create({
      data: {
        name: name,
        description: description,
        owner: owner,
      },
    });
    res.status(200).json();
  } catch (error) {
    next(error);
  }
});

router.delete(
  '/:projectId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.project.delete({
        where: { id: req.params.projectId },
      });
      res.status(200).json();
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:projectId',
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try {
      await prisma.project.update({
        where: {
          id: req.params.projectId,
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
