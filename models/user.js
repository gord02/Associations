var mongoose = require("mongoose");

// USER model - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // needs to be name of the schema which is an array
    posts: [
        {
            // This is used to create id
            type: mongoose.Schema.Types.ObjectId,
            // this allows you to assign the ids to something
            ref: "Post"
        }
    ]
});
module.exports= mongoose.model("User", userSchema);