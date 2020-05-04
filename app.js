const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(9980, () => {
  console.log('Server has been started on port 9980...')
})