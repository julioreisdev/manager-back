import express from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { peopleSchema } from "../schemas/peopleSchemas.js";
import { addPeopleController } from "../controllers/peopleControllers.js";
import { sessionValidate } from "../middlewares/sessionValidate.js";

const peopleRoutes = express.Router();

peopleRoutes.post(
  "/funcionario/cadastrar",
  sessionValidate,
  validateSchema(peopleSchema),
  addPeopleController
);

export default peopleRoutes;
