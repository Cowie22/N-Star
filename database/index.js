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

const updateRun = (id, info, callback) => {
  let queryStr = `UPDATE runs SET is_favorite = ? where id = ${id}`;
  console.log('database info', info);
  console.log('database id', id);
  const params = [info.info];
  connection.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

module.exports = {
  getOneRun, getAllRuns, updateRun
}