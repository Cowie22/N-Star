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

const getOnePlace = (place_id, callback) => {
  const queryStr = `SELECT * FROM places WHERE id = ${place_id}`;
  connection.query(queryStr, (err, place) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, place);
  });
};

const getLiftRuns = (lift_id, callback) => {
  const queryStr = `SELECT * FROM lifts inner join runs on lifts.id = ${lift_id} and runs.lift_id = ${lift_id};`;
  connection.query(queryStr, (err, runs) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, runs);
  })
}

const getVertical = (callback) => {
  const queryStr = 'SELECT vertical_feet FROM runs where is_favorite = 1';
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
  const params = [info.info];
  connection.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const updateComplete = (id, info, callback) => {
  let queryStr = `UPDATE runs SET to_complete = ? where id = ${id}`;
  const params = [info.info];
  connection.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const updateStatus = (id, info, callback) => {
  let queryStr = `UPDATE runs SET status = ? where id = ${id}`;
  const params = [info.info];
  connection.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  })
}

module.exports = {
  getOneRun, getAllRuns, updateRun, updateComplete, getLiftRuns, updateStatus, getVertical, getOnePlace
}