import { d as defineEventHandler } from '../../runtime.mjs';
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

const movies_get = defineEventHandler((event) => {
  return {
    movies: [
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
  };
});

export { movies_get as default };
//# sourceMappingURL=movies.get.mjs.map
