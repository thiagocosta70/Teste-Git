const stars = document.querySelectorAll('.rating input');

stars.forEach(star => star.addEventListener('change', () => {
  console.log('Avaliação:', star.value);
}));