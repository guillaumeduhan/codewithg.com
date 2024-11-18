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

const books = defineEventHandler((event) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        books: [
          {
            title: "1984",
            author: "George Orwell",
            year: 1949
          },
          {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
          },
          {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
          },
          {
            title: "Moby Dick",
            author: "Herman Melville",
            year: 1851
          },
          {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
          }
        ]
      });
    }, 3e3);
  });
});

export { books as default };
//# sourceMappingURL=books.mjs.map
