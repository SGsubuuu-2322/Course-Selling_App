import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  return res.json({
    message: "Admin signed up successfully",
  });
});
adminRouter.post("/signin", (req, res) => {
  return res.json({
    message: "Admin signed in successfully",
  });
});
adminRouter.post("/create/course", (req, res) => {
  return res.json({
    message: "Course created successfully",
  });
});
adminRouter.put("/update/course", (req, res) => {
  return res.json({
    message: "Course updation successfully",
  });
});
adminRouter.get("/courses/bulk", (req, res) => {
  return res.json({
    message: "All of your courses",
  });
});

export default adminRouter;
