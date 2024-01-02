const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = parseInt(star.getAttribute('data-value'));
    setRating(value);
  });

  star.addEventListener('mouseover', () => {
    const value = parseInt(star.getAttribute('data-value'));
    highlightStars(value);
  });

  star.addEventListener('mouseout', () => {
    resetStars();
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    const starValue = parseInt(star.getAttribute('data-value'));
    if (starValue <= value) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function resetStars() {
  stars.forEach(star => {
    star.classList.remove('active');
  });
}
function setRating(value) {
  ratingValue.textContent = `You rated this ${value} star${value !== 1 ? 's' : ''}.`;
  resetStars();
  stars.forEach(star => {
    const starValue = parseInt(star.getAttribute('data-value'));
    if (starValue <= value) {
      star.classList.add('active');
    }
  });
}
