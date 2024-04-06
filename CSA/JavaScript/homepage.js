document.addEventListener("DOMContentLoaded", function() {
  fetchBooks(); // Load books when page is loaded
});

//https://nzaff5q4xc.execute-api.us-east-1.amazonaws.com/prod/read

function fetchBooks() {
  fetch('https://nzaff5q4xc.execute-api.us-east-1.amazonaws.com/prod/read')
    //
    .then(response => response.json())

    console.error('aksdfkjnsfakgmqdw')

    .then(data => {
      const mainElement = document.querySelector('main');
      mainElement.innerHTML = ''; // Clear existing books

      data.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="/CSA/pics/${book.cover}" alt="Book Cover">
          <div class="details">
            <h3>Title: ${book.Title}</h3>
            <p>Author: ${book.Author}</p>
            <p>Genre: ${book.Genre}</p>
            <p>Year: ${book.Year}</p>
            <div class="actions">
              <button class="edit"><a href="edit.html?id=${book.id}">Edit</a></button>
              <button class="delete" onclick="deleteBook('${book.id}')">Delete</button>
            </div>
          </div>`;
        mainElement.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching book data:', error);
      alert('Failed to fetch book data');
    });
}

function deleteBook(bookId) {
  if (confirm('Are you sure you want to delete this book?')) {
    fetch(`https://nzaff5q4xc.execute-api.us-east-1.amazonaws.com/prod/delete/${bookId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        alert('Book deleted successfully');
        fetchBooks(); // Reload books after deletion
      } else {
        throw new Error('Failed to delete book');
      }
    })
    .catch(error => {
      console.error('Error deleting book:', error);
      alert('Failed to delete book');
    });
  }
}
