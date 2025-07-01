import { Router } from 'express';
import { PrismaClient, Prisma } from '../../../generated/prisma';
import { Request, Response, NextFunction } from 'express';

const router = Router();

const prisma = new PrismaClient();

router.get(
  '/:listId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await prisma.item.findMany({
        where: {
          List: {
            id: req.params.listId,
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
    const { listId, name, typeid, priority, labels } = req.body;
    let item: Prisma.ItemUncheckedCreateInput;

    if (labels) {
      item = {
        name,
        listId,
        typeid,
        priority,
        label: {
          connectOrCreate: labels.map(
            (label: Prisma.LabelUncheckedCreateInput) => ({
              where: { id: label.id },
              create: {
                name: label.name,
                projectId: label.projectId,
                bgColor: label.bgColor,
                textColor: label.textColor,
              },
            })
          ),
        },
      };
    } else {
      item = {
        name,
        listId,
        typeid,
        priority,
      };
    }

    await prisma.item.create({
      data: item,
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
      await prisma.item.delete({
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

router.patch(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await prisma.item.update({
        where: {
          id: req.params.id,
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
