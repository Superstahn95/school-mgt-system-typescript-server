import { Request, Response, NextFunction } from "express";

export const loginService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json("login service hit");
};

export const registerService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(201).json("register service ready");
};
