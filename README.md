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

## Reflection

I chose the Fitness Tracker domain because I'm a gym fitness freak and this represents a practical, real-world application that manages workout data with meaningful relationships and aggregations. The domain allowed me to implement a rich data model with multiple field types (enums for workout types and intensity levels, numeric values for duration and calories) while keeping the scope manageable for a contract-first API.

I selected TypeScript with Node.js, Express, and openapi-backend because it provides strong typing that mirrors the OpenAPI specification schemas, making the contract-first approach more robust. The openapi-backend library excels at routing by operationId and provides automatic request validation against the spec.

The contract-first methodology was incredibly valuable - starting with the OpenAPI specification forced me to think through all the API contracts, request/response schemas, and edge cases before writing any code. This approach caught many potential issues early and ensured the implementation stayed true to the design. The spec served as the single source of truth, with validation automatically enforced rather than hand-coded.

I used ChatGPT for assistance with specific implementation details and debugging, but the entire project architecture, specification design, and core implementation was done by me. The contract-first approach with OpenAPI 3.1.0 provided a solid foundation that made the development process more structured and maintainable.

## Contact
For questions or support, contact: psenthilkumar@hawk.illinoistech.edu / pradeepKumar.pk002@gmail.com