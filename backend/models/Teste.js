const mongoose = require("mongoose");

const { Schema } = mongoose;

const testeSchema = new Schema({
  teste: {
    type: String,
    required: true,
  },
  perguntas: {
    type: Array,
    required: true,
  },
});

const Teste = mongoose.model("Teste", testeSchema);

module.exports = Teste;
