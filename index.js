function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json()) // converts this to an object format that we can read and use
  .then(books => renderBooks(books))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//fetch("http://api.open-notify.org/astros.json")
//  .then(function (response) {
 //   return response.json();
 // })
 // .then(function (data) {
  //  console.log(data);
  //  console.log(`Holy cow! There are ${data["number"]} humans in space.`);
 // });