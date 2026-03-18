export interface Workout {
  id: string;
  type: "cardio" | "strength" | "yoga" | "hiit" | "mobility";
  durationMinutes: number;
  caloriesBurned: number;
  date: string;
  intensity: "low" | "medium" | "high";
  notes?: string;
}

let workouts: Workout[] = [
  {
    id: "wk_001",
    type: "cardio",
    durationMinutes: 45,
    caloriesBurned: 320,
    date: "2026-03-12",
    intensity: "medium",
    notes: "Morning treadmill run"
  },
  {
    id: "wk_002",
    type: "strength",
    durationMinutes: 60,
    caloriesBurned: 410,
    date: "2026-03-13",
    intensity: "high",
    notes: "Upper body training"
  },
  {
    id: "wk_003",
    type: "yoga",
    durationMinutes: 30,
    caloriesBurned: 120,
    date: "2026-03-14",
    intensity: "low",
    notes: "Stretch and breathing"
  },
  {
    id: "wk_004",
    type: "hiit",
    durationMinutes: 25,
    caloriesBurned: 300,
    date: "2026-03-15",
    intensity: "high",
    notes: "Interval circuit"
  },
  {
    id: "wk_005",
    type: "mobility",
    durationMinutes: 20,
    caloriesBurned: 90,
    date: "2026-03-16",
    intensity: "low",
    notes: "Recovery session"
  }
];

export const getAllWorkouts = () => workouts;

export const getWorkoutById = (id: string) =>
  workouts.find((w) => w.id === id);

export const createWorkout = (data: Omit<Workout, "id">) => {
  const newWorkout: Workout = {
    id: `wk_${Date.now()}`,
    ...data
  };
  workouts.push(newWorkout);
  return newWorkout;
};

export const updateWorkout = (id: string, data: Partial<Workout>) => {
  const index = workouts.findIndex((w) => w.id === id);
  if (index === -1) return null;

  workouts[index] = { ...workouts[index], ...data, id };
  return workouts[index];
};

export const deleteWorkout = (id: string) => {
  const index = workouts.findIndex((w) => w.id === id);
  if (index === -1) return null;

  const deleted = workouts[index];
  workouts.splice(index, 1);
  return deleted;
};