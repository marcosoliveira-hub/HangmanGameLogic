class Forca {

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta
    this.vidas = 6

    this.palavra = (() => {
      let i = 0
      let palavraInicial = []
      do {
        palavraInicial.push("_")
        i++
      }while (i < palavraSecreta.length)
      return palavraInicial
    })()

    this.letrasChutadas = []
  }

  chutar(letra) {
    if(letra.length == 1) {
      for (let i = 0; i < this.letrasChutadas.length; i++) {
        if (letra == this.letrasChutadas[i]) {
          return
        }
      }

      var letraCorresponde = false
  
      for (let i = 0; i < this.palavraSecreta.length; i++) { 
        if (this.palavraSecreta[i] == letra) {
          this.palavra[i] = letra
          letraCorresponde = true
        }
      }

      this.letrasChutadas.push(letra)
  
      if (!letraCorresponde) {
        this.vidas--
      }
    }
  }

  buscarEstado() { 
    if (this.vidas == 0) {
      return "perdeu"
    }else if (this.palavra.join("") == Object.values(this.palavraSecreta).join("")) {
      return "ganhou"
    } return "aguardando chute"
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
