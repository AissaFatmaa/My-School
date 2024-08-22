const express = require("express");
const Club = require("../models/Club");

const clubRouter = express.Router();

//add club
clubRouter.post("/add", async (req, res) => {
  try {
    let newclub = new Club(req.body);
    let result = await newclub.save();
    res.send({ club: result, msg: "club is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all clubs
clubRouter.get("/", async (req, res) => {
  try {
    let result = await Club.find();
    res.send({ clubs: result, msg: "all clubs" });
  } catch (error) {
    console.log(error);
  }
});

//get club by id

clubRouter.get("/:id", async (req, res) => {
  try {
    let result = await Club.findById(req.params.id);
    res.send({ club: result, msg: "one club" });
  } catch (error) {
    console.log(error);
  }
});

//delete club
clubRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Club.findByIdAndDelete(req.params.id);
    res.send({ msg: "club is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update club
clubRouter.put("/:id", async (req, res) => {
  try {
    let result = await Club.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ club: "result", msg: "club is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = clubRouter;
