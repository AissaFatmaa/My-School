const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
  },
  matricule: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  datenais: String,
  parentName: String,
  phone: String,
  address: String,
  grade: String,
  classe: String,
  sub_class: String,
  status: {
    type: String,
    default: "non active",
  },
  category: {
    type: String,
    default: "user",
  },
  abs:String,
  nb_abs:{type:Number, default:0},
   criter:[]
});

module.exports = mongoose.model("User", UserSchema);
