import { Request, Response, NextFunction } from "express";
export const loginController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json("login controller hit");
};

export const registerController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json("register controller hit");
};
