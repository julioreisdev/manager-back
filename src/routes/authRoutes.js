import express from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import authSchemas from "../schemas/authSchemas.js";
import authControllers from "../controllers/authControllers.js";
import { sessionValidate } from "../middlewares/sessionValidate.js";

const authRoutes = express.Router();

authRoutes.post(
  "/auth/signin",
  validateSchema(authSchemas.signIn),
  authControllers.signIn
);
authRoutes.post(
  "/auth/signup",
  sessionValidate,
  validateSchema(authSchemas.signUp),
  authControllers.signUp
);

export default authRoutes;
