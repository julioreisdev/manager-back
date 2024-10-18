import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import peopleRoutes from "./routes/peopleRoutes.js";

const app = express();

app.use(cors(), express.json());
app.use(testRouter);
app.use(authRoutes);
app.use(peopleRoutes);

export default app;
