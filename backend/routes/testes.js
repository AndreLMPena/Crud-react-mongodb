const router = require("express").Router();

const testeController = require("../controllers/testeController");

router.route("/testes").post((req, res) => testeController.create(req, res));

router.route("/testes").get((req, res) => testeController.getAll(req, res));

router.route("/testes/:id").get((req, res) => testeController.get(req, res));

router.route("/testes/:id").put((req, res) => testeController.update(req, res));

router
  .route("/testes/:id")
  .delete((req, res) => testeController.delete(req, res));

module.exports = router;
