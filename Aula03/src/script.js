function Jogar(){
rodada = 1;

dificuldade = prompt(
  "Escolha um nível de dificulda: 1- facil | 2-normal | 3- dificil | 4- Modo infinito"
);

if (dificuldade != 4) {
  while (rodada <= dificuldade) {
    console.log("Rodada: " + rodada);

    escolhaJogador = prompt("Nível " + rodada + ", vidro (1,2 ou 3)?");
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado) {
      // escolheu o vidro quebrado
      alert("Vidro quebrou! Acabou o jogo pra você");
      rodada = -1;
    } else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
      alert("Voce sobreviveu a " + rodada + "rodadas.");
      rodada += 1;
    }
    
  }
  if (rodada == dificuldade) {
    alert("Voce venceu! Parabéns!");
  }
} else{
    while (rodada != -1) {
    console.log("Rodada: " + rodada);

    escolhaJogador = prompt("Nível " + rodada + ", vidro (1,2 ou 3)?");
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado) {
      // escolheu o vidro quebrado
      alert("Vidro quebrou! Acabou o jogo pra você");
      alert("Voce sobreviveu a " + rodada + "rodadas.");
      rodada = -1;
    } else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
      rodada += 1;
    }
  }
}
}