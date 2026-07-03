module.exports.isLoggedIn = (req,res,next)=>
{
  // console.log(req.user);
     if(!req.isAuthenticated())
  {
    req.flash("error","Please LogIn");
    return res.redirect("/login");
  }
  next();
}