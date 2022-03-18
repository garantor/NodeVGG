const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// RELATIONSHIPS BTW DB
// Referencing in mongodb
// Embedding in mongodb
//https://www.bezkoder.com/mongoose-one-to-many-relationship/
const actionSchema = new Schema({
  projectID: {
    type: String, //this
  },
  description: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Action", actionSchema);


