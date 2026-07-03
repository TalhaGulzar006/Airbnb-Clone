const express = require("express");
const app = express();
const path = require("path");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
var flash = require("connect-flash");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  if (name === "anonymous") {
    req.flash("error", "user is not created");
    req.session.name = name;
   
    res.redirect("/result");
  } else {
    req.session.name = name;
    req.flash("success", "user is created successfully");
   
    res.redirect("/result");
  }
});

app.get("/result", (req, res) => {
  // res.send(`My name is ${req.session.name}`);
  if (req.session.name === "anonymous") {
     res.locals.message = req.flash("error");
    res.render("page.ejs", {
      name: req.session.name
    });
  } else {
     res.locals.message = req.flash("success");
    res.render("page.ejs", {
      name: req.session.name
    });
  }
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`session count is ${req.session.count}`);
// });

// app.get("/test",(req,res)=>
// {
//     console.log("this is a test request");
//     res.send("this is a test request");
// });

// app.use(cookieParser("secretcode"));

// app.get("/createcookie",(req,res)=>
// {
//     res.cookie("Name","Talha",{signed:true});
//     res.send("cookie is created")
//     console.log("Cookies is Created");
// });

// app.get("/getcookie",(req,res)=>
// {
//     let {Name} = req.signedCookies;
//     res.send(`the name is ${Name}`);
//     console.dir(req.signedCookies);
// });

app.listen(3000, (req, res) => {
  console.log("server is listning to a port 3000");
});
