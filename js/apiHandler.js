import renderBook from "./bookUI.js";

function getBookData() {
  $.get('https://www.googleapis.com/books/v1/volumes?q=javascript');
}

export default getBookData;
