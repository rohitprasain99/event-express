const express = require("express");
const router = express.Router();

const {
  getEvents,
  postEvent,
  putEvent,
  deleteEvent,
} = require("../controllers/eventController");

//middleware
// router.use(eventMiddleware)

//routes
router.get("/", getEvents);
router.post("/", postEvent);
router.put("/:id", putEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
