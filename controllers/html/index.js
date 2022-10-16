const router = require("express").Router();
router.get("/", async (req, res) => {
  return res.render("home", {
    layout: "main",
  });
});
// Testing Route
router.get("/home", async (req, res) => {
  return res.render("home");
});
// Testing Route
router.get("/aboutus", async (req, res) => {
  return res.render("aboutus");
});
// Testing Route
router.get("/login", async (req, res) => {
  return res.render("login");
});

// Testing Route
router.get("/signup", async (req, res) => {
  return res.render("signup");
});

// Testing Route
router.get("/news", async (req, res) => {
    return res.render("news");
  });
  
module.exports = router;
