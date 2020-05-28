insert into movies (
  movie_name
) values(
  $1 -- this is how our parameters are defined by to be dynamic.
)
returning *;