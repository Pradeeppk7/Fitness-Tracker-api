import { Context } from "openapi-backend";
import { Request, Response } from "express";
import { getWorkoutById } from "../store/workoutStore";

export default function getWorkoutByIdHandler(
  c: Context,
  _req: Request,
  res: Response
) {
  const id = c.request.params.id as string;
  const workout = getWorkoutById(id);

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }

  return res.status(200).json(workout);
}