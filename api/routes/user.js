const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

//register
router.post("/register", registerRules(), validation, async (req, res) => {
  const {
    image,
    matricule,
    name,
    lastname,
    email,
    password,
    datenais,
    parentName,
    phone,
    address,
    grade,
    classe,
    sub_class,
    status,
    category,
    abs,
    nb_abs,
    criter
  } = req.body;
  try {
    const newUser = new User({
      image,
      matricule,
      name,
      lastname,
      email,
      password,
      datenais,
      parentName,
      phone,
      address,
      grade,
      classe,
      sub_class,
      status,
      category,
      abs,
      nb_abs,
      criter
    });
    // check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;
    // generation token
    //save  the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUser._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600,
    });

    res
      .status(200)
      .send({ newUserToken, msq: "user is saved", token: `bearer ${token}` });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});
//login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exist
    const searchedUser = await User.findOne({ email });
    //find if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "Bad credential" });
    }
    //if password are equal
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "Bad credential" });
    }
    //creer un token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    //console.log(token)
    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "Can not get the user" });
  }
});

router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

//get all users
router.get("/", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "all users" });
  } catch (error) {
    console.log(error);
  }
});

//get user by id
router.get("/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ user: result, msg: " user" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.send({ msg: "user is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update user
router.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ user: "result", msg: "user is updated" });
  } catch (error) {
    console.log(error);
  }
});
// / update of contact
router.put("/critere/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { criter:req.body } }
    );
    res.send({ msg: "critere is  updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
