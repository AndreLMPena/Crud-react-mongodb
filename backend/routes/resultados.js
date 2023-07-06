const router = require("express").Router();

const resultadoController = require("../controllers/resultadoController");

router
  .route("/resultados")
  .post((req, res) => resultadoController.create(req, res));

router
  .route("/resultados")
  .get((req, res) => resultadoController.getAll(req, res));

router
  .route("/resultados/:id")
  .get((req, res) => resultadoController.get(req, res));

router
  .route("/resultados/:id")
  .put((req, res) => resultadoController.update(req, res));

router
  .route("/resultados/:id")
  .delete((req, res) => resultadoController.delete(req, res));

module.exports = router;
