function renderBook(data) {
  $("#book-catelog").html("")
  data = JSON.parse(data);
  console.log(data);
  
  data.items.forEach((items) => {
    $("#book-catelog").append (
      `<div class="book-div">
      <img src="${items.imageLinks.thumbnail}"></img>
      
      <div class="book-stuff">
      <p class="author">${items.volumeInfo.authors}</p>
      <p class="description">${items.volumeInfo.description}</p>
      </div>
      
      </div>
      `
      );
    });
  }
    

export default renderBook;