import express from "express";

const app = express();

app.post("/user/signup", (req, res) => {
  return res.json({
    message: "User signed up successfully",
  });
});
app.post("/user/signin", (req, res) => {
  return res.json({
    message: "User signed in successfully",
  });
});
app.post("/user/purchases", (req, res) => {
  return res.json({
    message: "All the user purchases till now...",
  });
});
app.post("/course/purchase", (req, res) => {
  return res.json({
    message: "Course purchased successfully",
  });
});
app.get("/courses", (req, res) => {
  return res.json({
    message: "All the courses on this platform...",
  });
});

app.listen(3000);
