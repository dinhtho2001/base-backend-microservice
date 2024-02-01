import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.error(error.stack);
  response.status(500).json({
    message: 'Có lỗi xảy ra từ phía server',
    error: process.env.NODE_ENV === 'production' ? {} : error.stack,
  });
};
