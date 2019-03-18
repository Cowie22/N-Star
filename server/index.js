const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getAllRuns, getOneRun, updateRun, updateComplete, getLiftRuns, updateStatus, getVertical } = require('../database/index');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/run', (req, res) => {
  getAllRuns((err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info);
    }
  });
});

app.get('/run/:id', (req, res) => {
  const { id } = req.params;
  getOneRun(id, (err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info)
    }
  });
});

app.get('/runs/:lift_id', (req, res) => {
  const { lift_id } = req.params;
  getLiftRuns(lift_id, (err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info)
    }
  });
});

app.get('/vertical', (req, res) => {
  getVertical((err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info);
    }
  })
})

app.put('/run/:id', (req, res) => {
  const { id } = req.params;
  updateRun(id, req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(req.body);
    }
  });
});

app.put('/toComplete/:id', (req, res) => {
  const { id } = req.params;
  updateComplete(id, req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(req.body);
    }
  });
});

app.put('/runStatus/:id', (req, res) => {
  const { id } = req.params;
  updateStatus(id, req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(req.body);
    }
  })
})


const PORT = process.env.PORT || 2222;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});