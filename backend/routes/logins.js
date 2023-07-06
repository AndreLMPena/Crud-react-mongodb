const router = require("express").Router();

const loginController = require("../controllers/loginController");

router.route("/logins").post((req, res) => loginController.create(req, res));

router.route("/logins").get((req, res) => loginController.getAll(req, res));

router.route("/logins/:id").get((req, res) => loginController.get(req, res));

router.route("/logins/:id").put((req, res) => loginController.update(req, res));

router
  .route("/logins/:id")
  .delete((req, res) => loginController.delete(req, res));

module.exports = router;
