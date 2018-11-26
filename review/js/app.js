document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');

  const addButton = document.querySelector('#new-item-form'); addButton.addEventListener('submit', handleAddButton);

  const deleteButton = document.querySelector('#delete-forms');
  deleteButton.addEventListener('submit', handleButtonDelete);
});

const handleAddButton = function (event) {
  event.preventDefault();
  const show = document.createElement('h2');
  show.textContent = `${this.show.value}`
  const rating = document.createElement('h3');
  rating.textContent = `${this.star.value}`
  const comments = document.createElement('p');
  comments.textContent = `${this.comments.value}`

  const container = document.createElement('div');
  container.appendChild(show);
  container.appendChild(rating);
  container.appendChild(comments);

  const reviewShow = document.querySelector('#reviews');
  reviewShow.appendChild(container);

  this.reset();
}

const handleButtonDelete = function (event) {
  event.preventDefault();
  const reviewShow = document.querySelector('#reviews');
  while (reviewShow.firstChild) {
    reviewShow.removeChild(reviewShow.firstChild);
  };
}
