var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/databasename", { useNewUrlParser: true, useUnifiedTopology: true });

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
    posts: [
        {
            // This is used to create id
            type: mongoose.Schema.Types.ObjectId,
            // this allows you to assign the ids to something
            ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);

// Post.create({
//     title: "how to cook the best burger",
//     content: "blah for five minutes"
// }, function(err, post){
// console.log(post);    
// });


// Post.create({
//     title: "how to cook the best burger pt. 3",
//     content: "bdgsgdghjgjh"
//     // post refers to to Post created above(this is due to being nested)
// }, function(err, post){
//     // finds users
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//             // once found this adds new post into the posts array specifc to the user
//         }else{
//             foundUser.posts.push(post);
//             // saves it to database
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(data);
//                 }
//             });
//         }
//     }); 
// });

// //  creates users
// User.create({
//     email: "bob@gmail.com",
//     name: "bob Blecher"
// });

// this wroks by first finding the email user, chains populate which populates posts to loook up put all data, exec is used to execute code therefore needs callback
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user)
    }
});