const mongoose = require("mongoose");

const { Schema } = mongoose;

const resultadoSchema = new Schema({
  teste: {
    type: String,
    required: true,
  },
  qtd_perguntas: {
    type: Number,
  },
  qtd_acertos: {
    type: Number,
  },
});

const Resultado = mongoose.model("Resultado", resultadoSchema);

module.exports = Resultado;
