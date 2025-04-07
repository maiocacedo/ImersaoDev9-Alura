function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Jogar() {
  escolhaJogador = prompt("Qual sua Idade?");

  if (escolhaJogador < 18) {
    alert("Você é um nenê, não pode jogar pedra, papel ou tesoura ainda");
  } else {
    escolhaJogador = prompt(
      "Escolha:     \n       1-Pedra \n      2-Papel \n       3-Tesoura\n      4-Lagarto\n      5-Spock"
    );

    escolhaCPU = getRandomArbitrary(0, 50);

    // Pedra: <10; Papel: >= 10 E <20 [10,20[; Tesoura: >= 20 E < 30 [20, 30[
    // Lagarto: >= 30 E < 40 [30, 40[  Spock: >= 40 E <50 [40,50[
    
    // Pedra(1) ganha de tesoura(3)
    // Tesoura(3) ganha de papel(2)
    // Papel(2) ganha de pedra(1)
    // Lagarto(4) envenena Spock(5)
    // Spock(5) esmaga tesoura(3)
    // Tesoura(3) decapita lagarto(4)
    // Lagarto(4) come papel(2)
    // Papel(2) refuta Spock(5)
    // Spock(5) vaporiza pedra(1)
    // Pedra(1) esmaga Lagarto(4)
    
    // Símbolos iguais resultam em empate

    if (escolhaCPU < 10) {
      escolhaCPU = 1;
      escolhaCPUstr = "Pedra";
    }
    if (escolhaCPU >= 10 && escolhaCPU < 20) {
      escolhaCPU = 2;
      escolhaCPUstr = "Papel";
    }
    if (escolhaCPU >= 20) {
      escolhaCPU = 3;
      escolhaCPUstr = "Tesoura";
    }
    
    if (escolhaCPU >= 30) {
      escolhaCPU = 4;
      escolhaCPUstr = "Tesoura";
    }
    
    if (escolhaCPU >= 40) {
      escolhaCPU = 3;
      escolhaCPUstr = "Tesoura";
    }

    // Escolhas:
    if (escolhaJogador == escolhaCPU) alert("Empate");

    if (
      (escolhaJogador == 1 && (escolhaCPU == 2 || escolhaCPU== 5)) ||
      (escolhaJogador == 2 && (escolhaCPU == 3 || escolhaCPU == 4)) ||
      (escolhaJogador == 3 && (escolhaCPU == 1 || escolhaCPU == 5)) ||
      (escolhaJogador == 4 && (escolhaCPU == 1 || escolhaCPU == 3)) ||
      (escolhaJogador == 5 && (escolhaCPU == 4 || escolhaCPU == 2)) 
    )
      alert("Perdeu, computador escolheu " + escolhaCPUstr);

    if (
      (escolhaCPU == 1 && (escolhaJogador == 2 || escolhaJogador == 5)) ||
      (escolhaCPU == 2 && (escolhaJogador == 3 || escolhaJogador == 4)) ||
      (escolhaCPU == 3 && (escolhaJogador == 1 || escolhaJogador == 5)) ||
      (escolhaCPU == 4 && (escolhaJogador == 1 || escolhaJogador == 3)) ||
      (escolhaCPU == 5 && (escolhaJogador == 4 || escolhaJogador == 2))
    )
      alert("Ganhou, computador escolheu " + escolhaCPUstr);
  }
}
