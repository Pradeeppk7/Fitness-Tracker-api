import { Context } from "openapi-backend";
import { Request, Response } from "express";
import { deleteWorkout } from "../store/workoutStore";

export default function deleteWorkoutHandler(
  c: Context,
  _req: Request,
  res: Response
) {
  const id = c.request.params.id as string;
  const deleted = deleteWorkout(id);

  if (!deleted) {
    return res.status(404).json({ error: "Workout not found" });
  }

  return res.status(200).json(deleted);
}