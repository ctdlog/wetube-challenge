import express from "express";
import { user, profile, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", user);
userRouter.get("/:id(\\d+)", profile);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
