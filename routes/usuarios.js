const express = require('express');
const router = express.Router();
const usuarios = require('../services/usuarios.js');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await usuarios.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Erro durante a requisicao da tabela usuarios `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await usuarios.create(req.body));
  } catch (err) {
    console.error(`Erro durante a criação de usuario`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await usuarios.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Erro atualizando usuario`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await usuarios.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting usuario`, err.message);
    next(err);
  }
});

module.exports = router;