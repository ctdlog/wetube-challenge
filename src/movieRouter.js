import express from "express";
import {
  home,
  movieDetail,
  getFilterMovie,
  postFilterMovie,
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.route("/filter").get(getFilterMovie).post(postFilterMovie);

export default movieRouter;
