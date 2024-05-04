const avaliarBtn = document.getElementById('avaliarBtn');
const avaliacaoContainer = document.getElementById('avaliacaoContainer');
const estrelas = document.querySelectorAll('.estrela');

const avaliarBtn1 = document.getElementById('avaliarBtn');
const avaliacaoContainer1 = document.getElementById('avaliacaoContainer');
const estrelas1 = document.querySelectorAll('.estrela');

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

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const timerElement = document.getElementById("timer");
  
    let timer;
    let timeLeft = 15 * 60; // 15 minutos em segundos
  
    startButton.addEventListener("click", function() {
      if (!timer) {
        timer = setInterval(updateTimer, 1000);
        updateTimer();
      }
    });
  
    function updateTimer() {
      if (timeLeft <= 0) {
        clearInterval(timer);
        timer = null;
        timerElement.textContent = "Tempo esgotado!";
      } else {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
      }
    }
  });
  