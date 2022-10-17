const router = require("express").Router();
router.get("/", async (req, res) => {
  return res.render("home", {
    layout: "main",
  });
});

router.get("/home", async (req, res) => {
  return res.render("home");
});

router.get("/aboutus", async (req, res) => {
  return res.render("aboutus");
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

router.get("/signup", async (req, res) => {
  return res.render("signup");
});


router.get("/news", async (req, res) => {
    return res.render("news");
 });
  
module.exports = router;