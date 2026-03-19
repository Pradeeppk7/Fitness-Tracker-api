import { Context } from "openapi-backend";
import { Request, Response } from "express";
import { getAllWorkouts } from "../store/workoutStore";

export default function weeklySummaryHandler(
  _c: Context,
  _req: Request,
  res: Response
) {
  const workouts = getAllWorkouts();

  const totalWorkouts = workouts.length;
  const totalDurationMinutes = workouts.reduce(
    (sum, w) => sum + w.durationMinutes,
    0
  );
  const totalCaloriesBurned = workouts.reduce(
    (sum, w) => sum + w.caloriesBurned,
    0
  );
  const averageDurationMinutes =
    totalWorkouts === 0 ? 0 : totalDurationMinutes / totalWorkouts;

  const counts: Record<string, number> = {};
  for (const w of workouts) {
    counts[w.type] = (counts[w.type] || 0) + 1;
  }

  const workoutsByType = Object.entries(counts).map(([type, count]) => ({
    type,
    count
  }));

  return res.status(200).json({
    totalWorkouts,
    totalDurationMinutes,
    totalCaloriesBurned,
    averageDurationMinutes,
    workoutsByType
  });
}