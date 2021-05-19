const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, altura, peso 
    FROM usuario LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(usuario){
  const result = await db.query(
    `INSERT INTO usuario 
    (id, name, altura, peso) 
    VALUES 
    (?, ?, ?, ?)`, 
    [
      usuario.name, usuario.altura, usuario.peso
    ]
  );

  let message = 'Erro ao criar usuario';

  if (result.affectedRows) {
    message = 'Usuario criado com sucesso';
  }

  return {message};
}

async function update(id, usuario){
  const result = await db.query(
    `UPDATE usuario
    SET name=?, altura=?, peso=?, 
    WHERE id=?`, 
    [
      usuario.name, usuario.altura, usuario.peso, id
    ]
  );

  let message = 'Erro atualizando usuario';

  if (result.affectedRows) {
    message = 'Usuario alterado com sucesso';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM usuarios WHERE id=?`, 
    [id]
  );

  let message = 'Error in deleting usuario';

  if (result.affectedRows) {
    message = 'Usuario deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}

module.exports = {
  getMultiple,
  create,
  update
}

module.exports = {
  getMultiple
}