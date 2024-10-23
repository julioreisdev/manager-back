import express from "express";
import { sessionValidate } from "../middlewares/sessionValidate.js";
import studentControllers from "../controllers/studentControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import studentSchemas from "../schemas/studentSchemas.js";

const studentRoutes = express.Router();

studentRoutes.get("/students", sessionValidate, studentControllers.getAll);
studentRoutes.post(
  "/students",
  sessionValidate,
  validateSchema(studentSchemas.add),
  studentControllers.addStudent
);

export default studentRoutes;
