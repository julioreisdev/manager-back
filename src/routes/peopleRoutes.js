import express from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import peopleSchemas from "../schemas/peopleSchemas.js";
import peopleControllers from "../controllers/peopleControllers.js";
import { sessionValidate } from "../middlewares/sessionValidate.js";

const peopleRoutes = express.Router();

peopleRoutes.post(
  "/people",
  sessionValidate,
  validateSchema(peopleSchemas.add),
  peopleControllers.addPeople
);

export default peopleRoutes;
