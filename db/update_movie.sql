update movies 
set movie_name = $1 
where movie_id = $2;

--i need to make sure my first argument is my movie name and that my second argument is my movie id