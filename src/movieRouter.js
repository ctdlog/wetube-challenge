import express from "express";
import {
  home,
  getUpload,
  postUpload,
  seeMovie,
  editMovie,
  deleteMovie,
  search,
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get("/", home);
movieRouter.route("/upload").get(getUpload).post(postUpload);
movieRouter.get("/movies/:id", seeMovie);
movieRouter.get("/movies/:id/edit", editMovie);
movieRouter.get("/movies/:id/delete", deleteMovie);
movieRouter.get("/search", search);

export default movieRouter;
