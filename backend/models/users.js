var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  name: String,
  googleId: String,
  secret: String,
});

module.exports = mongoose.model("User", userSchema);
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
