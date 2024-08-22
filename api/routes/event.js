const express = require("express");
const Event = require("../models/Event");

const eventRouter = express.Router();

//add event
eventRouter.post("/add", async (req, res) => {
  try {
    let newevent = new Event(req.body);
    let result = await newevent.save();
    res.send({ event: result, msg: "event is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all events
eventRouter.get("/", async (req, res) => {
  try {
    let result = await Event.find();
    res.send({ events: result, msg: "all events" });
  } catch (error) {
    console.log(error);
  }
});

//get event by id

eventRouter.get("/:id", async (req, res) => {
  try {
    let result = await Event.findById(req.params.id);
    res.send({ event: result, msg: "one event" });
  } catch (error) {
    console.log(error);
  }
});

//delete event
eventRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Event.findByIdAndDelete(req.params.id);
    res.send({ msg: "event is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update event
eventRouter.put("/:id", async (req, res) => {
  try {
    let result = await Event.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ event: "result", msg: "event is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = eventRouter;
