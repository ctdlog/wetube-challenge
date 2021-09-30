import "./db";
import "./models/Movie";
import "./models/User";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import path from "path";
import rootRouter from "./routers/rootRouter";
import movieRouter from "./routers/movieRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const PORT = 4000;
const logger = morgan("dev");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/movies", movieRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`✅ Server Ready!`));
