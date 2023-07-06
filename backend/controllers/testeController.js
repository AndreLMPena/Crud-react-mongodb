const TesteModel = require("../models/Teste");

const testeController = {
  create: async (req, res) => {
    try {
      const teste = {
        teste: req.body.teste,
        perguntas: req.body.perguntas,
      };

      const response = await TesteModel.create(teste);

      res.status(201).json({ response, msg: "Teste criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const testes = await TesteModel.find();
      res.json(testes);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await TesteModel.findById(id);

      if (!response) {
        res.status(404).json({ msg: "Teste não encontrado!" });
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
      const teste = {
        teste: req.body.teste,
        perguntas: req.body.perguntas,
      };

      const updatedTeste = await TesteModel.findByIdAndUpdate(id, teste);

      if (!updatedTeste) {
        res.status(404).json({ msg: "Teste não encontrado!" });
        return;
      }

      res.status(200).json({ teste, msg: "Teste atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const teste = await TesteModel.findById(id);

      if (!teste) {
        res.status(404).json({ msg: "Teste não encontrado!" });
        return;
      }

      const deletedTeste = await TesteModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedTeste, msg: "Teste excluido com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = testeController;
