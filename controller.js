module.exports = {
  addMovie: (req, res) => {
    //bring in what you need for the function
    const { movieName } = req.body;

    //get the database
    const db = req.app.get('db')

    // run sql query. massive makes our database in object format.
    db.add_movie(movieName)
      .then(movie => res.status(200).send(movie))
      .catch(err => res.status(500).send(err));
  },

  getMovies: (req, res) => {
    const db = req.app.get('db')

    db.get_movies()
      .then(movies => res.status(200).send(movies))
      .catch(err => res.status(500).send(err));
  },

  updateMovie: (req, res) => {
    const { id } = req.params;
    const { movieName } = req.body;
    const db = req.app.get('db');

    db.updateMovie(movieName, id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err));
  },

  deleteMovie: (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    db.deleteMovie(id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err));
  }
}