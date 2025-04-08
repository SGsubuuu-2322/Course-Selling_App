import express from "express";
import userRouter from "./userRouter.js";
import courseRouter from "./courseRouter.js";

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000, () =>
  console.log("Server is successfully running at PORT 3000")
);
