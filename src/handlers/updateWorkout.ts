import { Context } from "openapi-backend";
import { Request, Response } from "express";
import { updateWorkout } from "../store/workoutStore";

export default function updateWorkoutHandler(
  c: Context,
  _req: Request,
  res: Response
) {
  const id = c.request.params.id as string;
  const body = c.request.requestBody as any;

  const updated = updateWorkout(id, body);

  if (!updated) {
    return res.status(404).json({ error: "Workout not found" });
  }

  return res.status(200).json(updated);
}