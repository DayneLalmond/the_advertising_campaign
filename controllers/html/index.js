const router = require("express").Router();
router.get("/", async (req, res) => {
  return res.render("home", {
    layout: "main",
  });
});

router.get("/home", async (req, res) => {
  return res.render("home");
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

router.get("/signup", async (req, res) => {
  return res.render("signup");
});

router.get("/contact", async (req, res) => {
  return res.render("contact");
});

router.get("/createad", async (req, res) => {
    return res.render("createAd");
 });
  
module.exports = router;