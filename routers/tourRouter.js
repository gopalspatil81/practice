const express = require("express");
const tourController = require("./../controller/tourController");

const router = express.Router();

router.route("/").get(tourController.getAllTour);

router.route("/:id").get(tourController.getTour);

module.exports = router;
