import express from "express";
import userRouter from "./routes/userRouter.js";
import courseRouter from "./routes/courseRouter.js";
import adminRouter from "./routes/adminRouter.js";

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000, () =>
  console.log("Server is successfully running at PORT 3000")
);
