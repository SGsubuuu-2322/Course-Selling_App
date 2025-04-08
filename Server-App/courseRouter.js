import { Router } from "express";

const courseRouter = Router();

courseRouter.post("/course/purchase", (req, res) => {
    return res.json({
      message: "Course purchased successfully",
    });
  });
courseRouter.get("/courses", (req, res) => {
    return res.json({
      message: "All the courses on this platform...",
    });
  });

export default courseRouter;