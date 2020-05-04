const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

const ROOMS = [
  { id: 12345, name: 'test', script: '(() => {\nreturn "It\'s work!"\n})()', returns: '1'}
];

app.get('/api/rooms', (req, res) => {
  res.status(200).json(ROOMS.map(r =>({id: r.id, name: r.name})))
});

app.get('/api/room/:id', (req, res) => {
  const {script, returns} = ROOMS.find(r => (+r.id) === (+req.params.id));
  res.status(200).json({script, returns})
});

app.get('/api/runScript/:id', (req, res) => {
  const room = ROOMS.find(r => (+r.id) === (+req.params.id));
  room.returns = eval(room.script);
  const {script, returns} = room;
  res.status(200).json({script, returns});
});

app.post('/api/room', (req, res) => {
  const room = req.body;
  room.id = Number(Date.now());
  room.script = '(() => {\nreturn "It\'s work!"\n})()';
  room.returns = '';
  ROOMS.push(room);
  res.status(200).json({ok: true});
});

app.put('/api/room/:id', (req, res) => {
  const room = ROOMS.find(r => (+r.id) === (+req.params.id));
  room.script = req.body.script;
  res.status(200).json({ok: true});
});

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(9980, () => {
  console.log('Server has been started on port 9980...')
})

// ,
//         id: Date.now(),
//         script: `(() => {

// })();`,
//         returns: '1'