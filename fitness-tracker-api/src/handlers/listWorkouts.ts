import { Context } from "openapi-backend";
import { Request, Response } from "express";
import { getAllWorkouts } from "../store/workoutStore";

export default function listWorkouts(
  _c: Context,
  _req: Request,
  res: Response
) {
  return res.status(200).json(getAllWorkouts());
}