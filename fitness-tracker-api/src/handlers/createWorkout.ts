import { Context } from "openapi-backend";
import { Request, Response } from "express";
import { createWorkout } from "../store/workoutStore";

export default function createWorkoutHandler(
  c: Context,
  _req: Request,
  res: Response
) {
  const body = c.request.requestBody as any;
  const created = createWorkout(body);
  return res.status(201).json(created);
}