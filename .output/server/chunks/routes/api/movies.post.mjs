import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'fs';
import 'path';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'xss';
import 'ipx';

const movies_post = defineEventHandler(async (event) => {
  console.log("here");
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
  ];
  const body = await readBody(event);
  console.log(body);
  return movies.push(body);
});

export { movies_post as default };
//# sourceMappingURL=movies.post.mjs.map
