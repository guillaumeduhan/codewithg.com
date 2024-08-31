export default defineEventHandler(async (event) => {
  console.log("here")
  const movies = [
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
  ]

  const body = await readBody(event)
  console.log(body)
  return movies.push(body)
})
