const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.get("*", (req, res, next) => {
  res.json("Route not found!");
  console.error("Route not found!");
});

module.exports = router;
