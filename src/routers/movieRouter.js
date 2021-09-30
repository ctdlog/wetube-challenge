import express from "express";
import {
  seeMovie,
  getEdit,
  postEdit,
  deleteMovie,
} from "../controllers/movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.route("/movies/:id([0-9a-f]{24})").get(seeMovie);
movieRouter.route("/movies/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.route("/movies/:id([0-9a-f]{24})/delete").get(deleteMovie);

export default movieRouter;
