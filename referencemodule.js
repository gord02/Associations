var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/databasename", { useNewUrlParser: true, useUnifiedTopology: true });

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
//     title: "how to cook the best burger",
//     content: "blah for five minutes"
// }, function(err, post){
// console.log(post);    
// });

Post.create({
    title: "how to cook the best burger pt. 4",
    content: "asdlaks"
    // post refers to to Post created above(this is due to being nested)
}, function(err, post){
    // finds users
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
            // once found this adds new post into the posts array specifc to the user
        }else{
            foundUser.posts.push(post);
            // saves it to database
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }
    }); 
});

// //  creates users
// User.create({
//     email: "bob@gmail.com",
//     name: "bob Blecher"
// });

// this wroks by first finding the email user, chains populate which populates posts to loook up put all data, exec is used to execute code therefore needs callback
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user)
//     }
// });