const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

const getAllRuns = (callback) => {
  const queryStr = 'SELECT * FROM runs';
  connection.query(queryStr, (err, run) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, run);
  });
};

const getOneRun = (id, callback) => {
  const queryStr = `SELECT * FROM runs WHERE id = ${id}`;
  connection.query(queryStr, (err, run) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, run);
  });
};

module.exports = {
  getOneRun, getAllRuns,
}