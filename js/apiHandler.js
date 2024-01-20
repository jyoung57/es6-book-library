import renderBook from "./bookUI";

function getBookData() {
  $.get('https://www.googleapis.com/books/v1/volumes?q=javascript');
}

export default getBookData;
