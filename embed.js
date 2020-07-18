var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER model - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // needs to be name of the schema which is an array
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// // class upon model schema adding in info about newuser
// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });
// // push method is used becuase it is an array
// newUser.posts.push({
//     title: "How to brew polyjuice potion", 
//     content: "just kidding, go to potion class to learn"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// // creates newuser inside database
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// var newPost= new Post({
// title: "Refelction on Apples",
// content: "they are good"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
       // console.log(err);
    }else{
        // pushes into array
       user.posts.push({
           title: "three things i really hate",
           content:"voldemort vlodemort voldemort"
       });
       // saves to database
       user.save(function(err, user){
           if(err){
            console.log(err);
           }else{
               console.log(user);
           }
       });
    }
});