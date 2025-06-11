// Create and display book count
const countElement = document.createElement('div');
countElement.textContent = `Total Books in Library: ${bookDatabase.length}`;
countElement.style.margin = '1rem';
countElement.style.fontWeight = 'bold';
countElement.style.textAlign = 'center';

// Append it to the top of the body or specific container
document.body.prepend(countElement);



/*display books
const container = document.querySelector('.book-card-container');
bookDatabase.forEach((book,index) => {
  const bookCard = document.createElement("div");
	bookCard.className="book-card";
	bookCard.innerHTML =`
    <div class="book" data-index="${index + 1}">
      <img src="${book.image}" alt="${book.title}">
    </div>
		<div class="book-card-text-container">
    <h3>${book.title}</h3>
    <h4>${book.author}</h4>
    <h4>${book.genre}</h4>
    <p>${book.description}</p>
		</div>
		`;
	container.appendChild(bookCard);
});
	*/
	
	// the dataset is arranged according to the book genre

document.querySelectorAll('.genre-section').forEach(section => {
  const genre = section.dataset.genre;
  const container = section.querySelector('.book-card-container');

  const filteredBooks = bookDatabase.filter(book => book.genre.includes(genre));

  filteredBooks.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.innerHTML = `
      <div class="book" data-index="${index + 1}">
        <img src="${book.image}" alt="${book.title}">
      </div>
      <div class="book-card-text-container">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <h4>${book.genre}</h4>
        <p>${book.description}</p>
      </div>
    `;
    container.appendChild(bookCard);
  });
});