const ResultadoModel = require("../models/Resultado");

const ResultadoController = {
  create: async (req, res) => {
    try {
      const resultado = {
        teste: req.body.teste,
        qtd_perguntas: req.body.qtd_perguntas,
        qtd_acertos: req.body.qtd_acertos,
      };

      const response = await ResultadoModel.create(resultado);

      res.status(201).json({ response, msg: "Resultado criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const resultados = await ResultadoModel.find();
      res.json(resultados);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await ResultadoModel.findById(id);

      if (!response) {
        res.status(404).json({ msg: "Resultado não encontrado!" });
        return;
      }

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = {
        teste: req.body.teste,
        qtd_perguntas: req.body.qtd_perguntas,
        qtd_acertos: req.body.qtd_acertos,
      };

      const updatedResultado = await ResultadoModel.findByIdAndUpdate(
        id,
        resultado
      );

      if (!updatedResultado) {
        res.status(404).json({ msg: "Resultado não encontrado!" });
        return;
      }

      res
        .status(200)
        .json({ resultado, msg: "Resultado atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const resultado = await ResultadoModel.findById(id);

      if (!resultado) {
        res.status(404).json({ msg: "Resultado não encontrado!" });
        return;
      }

      const deletedResultado = await ResultadoModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedResultado, msg: "Resultado excluido com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ResultadoController;
