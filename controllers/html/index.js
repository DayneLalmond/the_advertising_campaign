const router = require("express").Router();
router.get("/", async (req, res) => {
    return res.render("home")
});
router.get("/login", async (req, res) => {
    return res.render("login")
});

module.exports = router;
