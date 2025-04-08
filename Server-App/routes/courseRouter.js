import { Router } from "express";

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  return res.json({
    message: "Course purchased successfully",
  });
});
courseRouter.get("/all", (req, res) => {
  return res.json({
    message: "All the courses on this platform...",
  });
});
courseRouter.get("/preview", (req, res) => {
  return res.json({
    message: "All the courses on this platform...",
  });
});

export default courseRouter;
