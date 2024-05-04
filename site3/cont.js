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
