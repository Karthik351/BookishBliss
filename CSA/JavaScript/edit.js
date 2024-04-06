document.getElementById('edit-book-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const bookId = getBookIdFromURL(); 
  const formData = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    genre: document.getElementById('genre').value,
    year: parseInt(document.getElementById('year').value) 
  };
  
  fetch(`https://nzaff5q4xc.execute-api.us-east-1.amazonaws.com/prod/update/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert('Book updated successfully');
      window.location.href = "/CSA/html/index.html"; // Redirect to home page after updating the book
    } else {
      throw new Error('Failed to update book');
    }
  })
  .catch(error => {
    console.error('Error updating book:', error);
    alert('Failed to update book');
  });
});

function getBookIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}
