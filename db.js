/*import config from './config';
import knex     from ''
*/

const knex = require('knex')({
  client: 'mysql2',
  connection:{
    host                :'localhost',
    user                :'root',
    password            :'root',
    port                :'8080',
    database            :'cooper',
  }
})

module.exports = knex;