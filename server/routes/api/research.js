const router = require("express").Router();
const researchController = require("../../controllers/researchController");

// Matches with "/api/research"
router.route("/")
  // .get(researchController.findAll)
  // .post(researchController.create);

// Matches with "/api/research/:id"
router
  .route("/:id")
  // .get(researchController.findById)
  // .put(researchController.update)
  // .delete(researchController.remove);

module.exports = router;
