const db = require('../config/db');

const getLogs = (callback) => {
  db.query('SELECT * FROM logs', callback);
};

const createLog = (log, callback) => {
  const { usuario, fecha, ip, accion } = log;

  db.query(
    'INSERT INTO logs (usuario, fecha, ip, accion) VALUES (?, ?, ?, ?)',
    [usuario, fecha, ip, accion],
    callback
  );
};

module.exports = {
  getLogs,
  createLog
};