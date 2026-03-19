# Fitness Tracker Workout API

A contract-first REST API built with OpenAPI 3.1.0, TypeScript, Express, openapi-backend, and Swagger UI.

## Domain
This API manages workout records for a fitness tracker.

## Tech Stack
- TypeScript
- Node.js
- Express
- openapi-backend
- Swagger UI Express

## Features
- List all workouts
- Create a workout
- Get a workout by ID
- Update a workout
- Delete a workout
- View weekly workout summary

## Project Structure
- `openapi.yaml` — OpenAPI 3.1 contract
- `src/server.ts` — server entry point
- `src/handlers/` — operation handlers
- `src/store/workoutStore.ts` — in-memory data store

## OperationId Mapping
- `WorkoutService_list` → `listWorkouts.ts`
- `WorkoutService_create` → `createWorkout.ts`
- `WorkoutService_getById` → `getWorkoutById.ts`
- `WorkoutService_update` → `updateWorkout.ts`
- `WorkoutService_delete` → `deleteWorkout.ts`
- `WorkoutService_weeklySummary` → `weeklySummary.ts`

## Local Run
```bash
npm install
npm run dev
```

## API Documentation
Once the server is running, access the Swagger UI documentation at:
```
http://localhost:3000/docs
```

You can also retrieve the OpenAPI definition at:
- YAML: `http://localhost:3000/openapi.yaml`
- JSON: `http://localhost:3000/openapi.json`

### Deployed API Documentation
The API is deployed on Render. Access the Swagger UI documentation at:
```
https://fitness-tracker-api-m95n.onrender.com/docs
```

You can also retrieve the OpenAPI definition at:
- YAML: `https://fitness-tracker-api-m95n.onrender.com/openapi.yaml`
- JSON: `https://fitness-tracker-api-m95n.onrender.com/openapi.json`

## Contact
For questions or support, contact: pradeeplumar.pk002@gmail.com