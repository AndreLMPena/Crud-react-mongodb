const LoginModel = require("../models/Login");

const loginController = {
  create: async (req, res) => {
    try {
      const login = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      };

      const response = await LoginModel.create(login);

      res.status(201).json({ response, msg: "Login criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const logins = await LoginModel.find();
      res.json(logins);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await LoginModel.findById(id);

      if (!response) {
        res.status(404).json({ msg: "Login não encontrado!" });
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
      const login = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      };

      const updatedLogin = await LoginModel.findByIdAndUpdate(id, login);

      if (!updatedLogin) {
        res.status(404).json({ msg: "Login não encontrado!" });
        return;
      }

      res.status(200).json({ login, msg: "Login atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const login = await LoginModel.findById(id);

      if (!login) {
        res.status(404).json({ msg: "Login não encontrado!" });
        return;
      }

      const deletedLogin = await LoginModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedLogin, msg: "Login excluido com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = loginController;
