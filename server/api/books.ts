export default defineEventHandler((event) => {
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
    }, 3000);
  });
});
