/*
Books will be stored into a simple array
Add function that can take user input and store the new book objects into an array
Write function that loops through array and displays each book on the page
*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//constructor
function Book(title, author, pages ,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//book array
let myLibrary = [];
let newBook;

function addBookToLibrary() {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}