import express from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signInSchema, signUpSchema } from "../schemas/authSchemas.js";
import {
  signInController,
  signUpController,
} from "../controllers/authControllers.js";
import { sessionValidate } from "../middlewares/sessionValidate.js";

const authRoutes = express.Router();

authRoutes.post(
  "/autenticacao/entrar",
  validateSchema(signInSchema),
  signInController
);
authRoutes.post(
  "/autenticacao/cadastrar",
  sessionValidate,
  validateSchema(signUpSchema),
  signUpController
);

export default authRoutes;
