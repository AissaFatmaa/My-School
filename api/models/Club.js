const mongoose = require("mongoose");
const schema = mongoose.Schema;
const clubSchema = new schema({
  image: String,
  name_club: String,
  teacher: String,
  level: String,
  Time: String,
  Capacity: String,
  Price: String,
});

module.exports = mongoose.model("Club", clubSchema);
