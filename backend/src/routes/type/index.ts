import { Router } from 'express';
import { PrismaClient } from '../../../generated/prisma';

const router = Router();

router.get('/types', async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.type.findMany({});
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

export default router;
