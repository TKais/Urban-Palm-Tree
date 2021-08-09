const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

app.get('/api/options/', (req, res) => {
  console.log('Hitting endpoint');
  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
    {label: 'Option 4', value: 4}
  ];
  const data = JSON.stringify(options);
  console.log(data);
  return res.json(data);
});

app.post('/api/form/', (req, res) => {
  console.log('?????????????', req.body);
  return res.send(true);
});

app.get('/api/search/', (req, res) => {
  console.log('?????????????', req.query);
  const search = [
    {id: 'first', label: 'First'},
    {id: 'second', label: 'Second'},
    {id: 'third', label: 'Third'},
    {id: 'fourth', label: 'Fourth'}
  ];
  return res.send(JSON.stringify(search));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
