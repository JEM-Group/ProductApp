const router = require("express").Router();
// const bookRoutes = require("./books");
const homeRoutes = require("./home");
const researchRoutes = require("./research");
const dashboardRoutes = require("./dashboard");


// all routes
// router.use("/books", bookRoutes);
router.use("/home", homeRoutes);
router.use("/research", researchRoutes);
router.use("/dashboard", dashboardRoutes);


module.exports = router;