import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  return res.json({
    message: "User signed up successfully",
  });
});
userRouter.post("/signin", (req, res) => {
  return res.json({
    message: "User signed in successfully",
  });
});
userRouter.post("/purchases", (req, res) => {
  return res.json({
    message: "All the user purchases till now...",
  });
});

export default userRouter;
