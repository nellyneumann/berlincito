const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: String,
  description: String,
  organizer: String,
  date: String,
  address: String,
  tags: [String],
});

const berlinEvent = model("Event", eventSchema);

module.exports = berlinEvent;
