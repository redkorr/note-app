import { Request, Response, NextFunction } from 'express';
import getErrorMessage from '../utils/getErrorMessage';
import CustomError from '../errors/customError';

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    next(err);
    return;
  }
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      error: {
        message: err.message,
        code: err.code,
      },
    });
    return;
  }
  res.status(500).json({
    error: {
      message:
        getErrorMessage(err) ||
        'An error occurred. Please view logs for more details',
    },
  });
};

export default errorHandler;
