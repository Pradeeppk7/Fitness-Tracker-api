import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
import { OpenAPIBackend } from "openapi-backend";

import listWorkouts from "./handlers/listWorkouts";
import createWorkoutHandler from "./handlers/createWorkout";
import getWorkoutByIdHandler from "./handlers/getWorkoutById";
import updateWorkoutHandler from "./handlers/updateWorkout";
import deleteWorkoutHandler from "./handlers/deleteWorkout";
import weeklySummaryHandler from "./handlers/weeklySummary";

const app = express();
app.use(cors());
app.use(express.json());

const openapiPath = path.join(process.cwd(), "openapi.yaml");
const apiDefinition = YAML.load(openapiPath);

const api = new OpenAPIBackend({
  definition: openapiPath,
  handlers: {
    WorkoutService_list: listWorkouts,
    WorkoutService_create: createWorkoutHandler,
    WorkoutService_getById: getWorkoutByIdHandler,
    WorkoutService_update: updateWorkoutHandler,
    WorkoutService_delete: deleteWorkoutHandler,
    WorkoutService_weeklySummary: weeklySummaryHandler,

    validationFail: (_c, _req, res) => {
      return res.status(400).json({
        error: "Request validation failed"
      });
    },

    notFound: (_c, _req, res) => {
      return res.status(404).json({
        error: "Route not found"
      });
    }
  }
});

api.init();

app.get("/openapi.yaml", (_req: Request, res: Response) => {
  res.type("text/yaml").send(fs.readFileSync(openapiPath, "utf8"));
});

app.get("/openapi.json", (_req: Request, res: Response) => {
  res.json(apiDefinition);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiDefinition));

app.use((req: Request, res: Response) => {
  api.handleRequest(
    {
      method: req.method,
      path: req.path,
      body: req.body,
      query: req.query as { [key: string]: string | string[] } | undefined,
      headers: req.headers as { [key: string]: string | string[] },
      params: req.params as { [key: string]: string }
    },
    req,
    res
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Docs available at http://localhost:${PORT}/docs`);
});