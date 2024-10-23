import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import peopleRoutes from "./routes/peopleRoutes.js";
import instanceRoutes from "./routes/instanceRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(cors(), express.json());
app.use(testRouter);
app.use(authRoutes);
app.use(peopleRoutes);
app.use(instanceRoutes);
app.use(studentRoutes);

export default app;
