const express = require("express");
const {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const methodNotAllowed = require("../utils/methodNotAllowed");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "testing" });
});

router.get("/another", (req, res) => {
  res.json({ message: "another" });
});

router.get("/last", (req, res) => {
  res.json({ message: "last" });
});

router.route("/").get(getAllTask).post(createTask).all(methodNotAllowed);
router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask)
  .all(methodNotAllowed);

module.exports = router;
