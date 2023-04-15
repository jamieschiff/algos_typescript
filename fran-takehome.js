const express = require('express');
const path = require('path');
const app = express();
const PORT = 9000;

app.use(express.json());

const cache = {};

app.post('/input', (req, res) => {
  const { stringSub } = req.body;
  console.log(stringSub);

  new Promise((resolve) => {
    if (cache.hasOwnProperty(stringSub)) {
      cache[stringSub]++;
    } else {
      cache[stringSub] = 1;
    }
    resolve();
  })
    .then(() => {
      res.status(200).send('String submitted.');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Server error.');
    });
});

app.get('/query', (req, res) => {
  const { key } = req.query;
  let seenCount = 0;

  new Promise((resolve) => {
    if (cache.hasOwnProperty(key)) {
      seenCount = cache[key];
    }
    resolve();
  })
    .then(() => {
      res.status(200).json(seenCount);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Server error.');
    });
});

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
