const mongoose = require("mongoose");
const schema = mongoose.Schema;
const eventSchema = new schema({
  image: String,
  name_event: String,
  Description: String,
  Date: String,
});

module.exports = mongoose.model("Event", eventSchema);
