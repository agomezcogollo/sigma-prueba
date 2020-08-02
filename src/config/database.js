const mysql = require('promise-mysql')
const keysdba = require('./keysdb')

const pool = mysql.createPool(keysdba.database);

pool.getConnection()
  .then(connection => {
    pool.releaseConnection(connection);
  })
  .then(db => console.log('Datbase is Connected') )
  .catch(err => console.log(err) )

module.exports = pool
