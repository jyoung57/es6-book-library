function getBookData() {
  $.get(
    'https://www.googleapis.com/books/v1/volumes?q=javascript',
    function (data) {
      console.log(data.items);
      data.items.forEach(result => {
        ${"#book-catelog"}.append{
          `<div class="title-div">
            <p> ${result.authors}</p>
            <p> ${result.title}</p>
          </div>`
        }
      })
    }
  );
}

export default getBookData;
