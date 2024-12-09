import { NextFunction, Request, Response } from "express";

const responseErrorMiddleware = (
  err: unknown,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) {
    next();
    return;
  }

  
  res
    .status(400)
    .json({
      errors: (err as any)?.message || err || "error",
    })
    .end();

};

export default responseErrorMiddleware;
