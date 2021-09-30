import express from "express";
import {
  home,
  getUpload,
  postUpload,
  search,
} from "../controllers/movieController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/upload").get(getUpload).post(postUpload);
rootRouter.route("/search").get(search);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);

export default rootRouter;
