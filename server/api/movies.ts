export default defineEventHandler(async (event) => {
  // Shared movies array
  let movies = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year: 1999
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994
    }
  ];

  // Determine the HTTP method
  if (event.req.method === 'GET') {
    // Handle GET request
    return {
      movies
    };
  } else if (event.req.method === 'POST') {
    // Handle POST request
    const body = await readBody(event);
    movies = [...movies, body]; // Add the new movie to the array
    return {
      movies
    };
  }
});
