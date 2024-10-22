import express from "express";

const testRouter = express.Router();

testRouter.get("/", (_, res) => res.send("Hello Weducar!"));

export default testRouter;
