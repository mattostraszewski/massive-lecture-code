require('dotenv').config();
const express = require('express'),
  massive = require('massive'),
  ctrl = require('./controller'),
  { SERVER_PORT, CONNECTION_STRING } = process.env,
  port = SERVER_PORT,
  app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db) //explain this to me please.
  console.log('db connected')
})

app.post('/api/movie', ctrl.addMovie);

app.get('/api/movies', ctrl.getMovies);

app.put('/api/movie/:id', ctrl.updateMovie);

app.delete('/api/movie/:id', ctrl.updateMovie);

app.listen(port, () => console.log(`Server running on ${port}`));