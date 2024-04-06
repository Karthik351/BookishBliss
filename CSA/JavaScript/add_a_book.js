document.getElementById('addBookForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const formData = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    genre: document.getElementById('genre').value,
    year: parseInt(document.getElementById('year').value) // Parse as integer
  };
  
  fetch('https://nzaff5q4xc.execute-api.us-east-1.amazonaws.com/prod/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert('Book added successfully');
      window.location.href = "/CSA/html/index.html"; // Redirect to home page after adding the book
    } else {
      throw new Error('Failed to add book');
    }
  })
  .catch(error => {
    console.error('Error adding book:', error);
    alert('Failed to add book');
  });
});
