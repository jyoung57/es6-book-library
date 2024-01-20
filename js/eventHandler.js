import getBookData from "./apiHandler.js";

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  const query = event.target["book-query"].value;
  getBookData(query);
}

$("#book-form").on("submit", handleFormSubmit);

export default handleFormSubmit;