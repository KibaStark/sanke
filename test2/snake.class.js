
class Snake {
  constructor () {
    this.test = "je suis une variable"
  }

  handleKeyPress(keyCode) {
    console.log("keypress", keyCode)
  }

  start() {
    // j'accède à la variable test avec this.test
    console.log(this.test)
    this.test = "je suis une variable modifiée";
    console.log(this.test)
  }

};