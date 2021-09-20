import express from "express";
import morgan from "morgan";
import {
  urlLogger,
  timeLogger,
  securityLogger,
  protectorMiddleware,
} from "./middelwares";
import storyRouter from "./routers/storyRouters";
import userRouter from "./routers/userRouters";
import globalRouter from "./routers/globalRouters";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
