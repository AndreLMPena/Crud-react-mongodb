const router = require("express").Router();

// Logins routes
const loginsRouter = require("./logins");
router.use("/", loginsRouter);

// Resultados routes
const resultadoRouter = require("./resultados");
router.use("/", resultadoRouter);

// Testes routes
const testeRouter = require("./testes");
router.use("/", testeRouter);

module.exports = router;
