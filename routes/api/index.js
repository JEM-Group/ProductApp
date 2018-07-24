const router = require("express").Router();
const bookRoutes = require("./books");
const homeRoutes = require("./home");
const researchRoutes = require("./research");


// all routes
router.use("/books", bookRoutes);
router.use("/home", homeRoutes);
router.use("/research", researchRoutes);


module.exports = router;