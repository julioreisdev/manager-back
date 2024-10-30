import express from "express";
import { sessionValidate } from "../middlewares/sessionValidate.js";
import instanceControllers from "../controllers/instanceControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import instanceSchemas from "../schemas/instanceSchemas.js";

const instanceRoutes = express.Router();

instanceRoutes.get(
  "/instances",
  sessionValidate,
  instanceControllers.getInstances
);

instanceRoutes.get(
  "/instances/:id",
  sessionValidate,
  instanceControllers.getUserInstances
);

instanceRoutes.post(
  "/instances",
  sessionValidate,
  validateSchema(instanceSchemas.add),
  instanceControllers.addInstance
);

export default instanceRoutes;
