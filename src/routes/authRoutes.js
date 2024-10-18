import express from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signInSchema, signUpSchema } from "../schemas/authSchemas.js";
import {
  signInController,
  signUpController,
} from "../controllers/authControllers.js";

const authRoutes = express.Router();

authRoutes.post(
  "/autenticacao/entrar",
  validateSchema(signInSchema),
  signInController
);
authRoutes.post(
  "/autenticacao/cadastrar",
  validateSchema(signUpSchema),
  signUpController
);

export default authRoutes;
