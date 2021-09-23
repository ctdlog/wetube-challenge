import express from "express";
import morgan from "morgan";
// import {
//   urlLogger,
//   timeLogger,
//   securityLogger,
//   protectorMiddleware,
// } from "./middelwares";
import movieRouter from "./movieRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

// app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);

app.use("/", movieRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
