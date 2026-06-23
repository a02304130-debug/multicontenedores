const logModel = require('../models/logModel');

exports.getLogs = (req, res) => {
  logModel.getLogs((err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};

exports.createLog = (req, res) => {
  const log = req.body;

  logModel.createLog(log, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: 'Log registrado' });
  });
};