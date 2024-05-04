const avaliarBtn = document.getElementById('avaliarBtn');
const avaliacaoContainer = document.getElementById('avaliacaoContainer');
const estrelas = document.querySelectorAll('.estrela');

avaliarBtn.addEventListener('click', () => {
  avaliacaoContainer.classList.remove('hidden');
});

estrelas.forEach(estrela => {
  estrela.addEventListener('click', () => {
    const valor = estrela.getAttribute('data-valor');
    alert('Você avaliou seu pedido como ' + valor + ' estrelas.');
    // Aqui você pode enviar o valor para o servidor ou fazer qualquer outra ação desejada.
  });
});
