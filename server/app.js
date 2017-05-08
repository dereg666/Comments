const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const Datastore = require('nedb');


const app = express();


const data = [
  {
    Name: 'test123',
    Value: 'hello how are you',
    Time: 1494228496435,
  },
  {
    Name: 'ah ha',
    Value: 'Good afternoon',
    Time: 1494228000000,
  },
];

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/api/loading', (req, res) => {
  res.json(data);
});

app.post('/api/posting', (req, res) => {
  const temp = req.body;
  temp.Time = Date.now();
  console.log(temp);
  data.push(temp);
  res.json(temp.Time);
  // res.sendStatus(200);
});

module.exports = app;
