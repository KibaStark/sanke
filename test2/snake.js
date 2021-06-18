window.onload = function () {
  document.addEventListener('keydown', keyboard); // évènement clavier.
};

function keyboard(evt) {
  snake.handleKeyPress(evt.keyCode);
}

const snake = new Snake() // On crée une nouvelle instance du skate

snake.start()