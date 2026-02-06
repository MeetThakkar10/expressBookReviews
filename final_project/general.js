const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Task 10: Get all books (async/await)
async function getAllBooks() {
  const res = await axios.get(`${BASE_URL}/books`);
  console.log(res.data);
}

// Task 11: Get book by ISBN (Promises)
function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

// Task 12: Get books by Author
async function getBooksByAuthor(author) {
  const res = await axios.get(`${BASE_URL}/books/author/${author}`);
  console.log(res.data);
}

// Task 13: Get books by Title
async function getBooksByTitle(title) {
  const res = await axios.get(`${BASE_URL}/books/title/${title}`);
  console.log(res.data);
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
