import express from "express";
import {
  helloWeducarController,
  helloWeducarWithParamsController,
} from "../controllers/testControllers.js";
import { sessionValidate } from "../middlewares/sessionValidate.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { testWithParamsSchema } from "../schemas/testWithParamsSchemas.js";

const testRouter = express.Router();

testRouter.get("/test", helloWeducarController);
testRouter.post(
  "/test",
  validateSchema(testWithParamsSchema),
  sessionValidate,
  helloWeducarWithParamsController
);

export default testRouter;
