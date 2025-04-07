// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    "pergunta": "Quem é o protagonista da Parte 3 de JoJo?",
    "respostas": [
      { "opcao": "Jotaro Kujo", "correto": true },
      { "opcao": "Joseph Joestar", "correto": false },
      { "opcao": "Jonathan Joestar", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o Stand de Jotaro Kujo?",
    "respostas": [
      { "opcao": "Star Platinum", "correto": true },
      { "opcao": "The World", "correto": false },
      { "opcao": "Crazy Diamond", "correto": false }
    ]
  },
  {
    "pergunta": "Em qual parte de JoJo aparece o vilão Dio Brando?",
    "respostas": [
      { "opcao": "Parte 1 e Parte 3", "correto": true },
      { "opcao": "Parte 2", "correto": false },
      { "opcao": "Parte 4", "correto": false }
    ]
  },
  {
    "pergunta": "Qual Stand é utilizado por Rohan Kishibe?",
    "respostas": [
      { "opcao": "Heaven's Door", "correto": true },
      { "opcao": "Magician's Red", "correto": false },
      { "opcao": "Stone Free", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o nome do arco da Parte 5 de JoJo?",
    "respostas": [
      { "opcao": "Vento Aureo", "correto": true },
      { "opcao": "Diamond is Unbreakable", "correto": false },
      { "opcao": "Stardust Crusaders", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é a principal habilidade do Stand de Josuke Higashikata?",
    "respostas": [
      { "opcao": "Cura e reconstrução de objetos", "correto": true },
      { "opcao": "Manipulação do tempo", "correto": false },
      { "opcao": "Criação de fogo", "correto": false }
    ]
  },
  {
    "pergunta": "Quem é o criador de JoJo's Bizarre Adventure?",
    "respostas": [
      { "opcao": "Hirohiko Araki", "correto": true },
      { "opcao": "Masashi Kishimoto", "correto": false },
      { "opcao": "Eiichiro Oda", "correto": false }
    ]
  },
  {
    "pergunta": "O que é o 'Stand' em JoJo's Bizarre Adventure?",
    "respostas": [
      { "opcao": "Uma manifestação espiritual de poder", "correto": true },
      { "opcao": "Uma arma mágica", "correto": false },
      { "opcao": "Uma técnica de luta", "correto": false }
    ]
  },
  {
    "pergunta": "Em qual parte de JoJo a história se passa em Morioh?",
    "respostas": [
      { "opcao": "Parte 4", "correto": true },
      { "opcao": "Parte 3", "correto": false },
      { "opcao": "Parte 6", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o nome do Stand de Giorno Giovanna?",
    "respostas": [
      { "opcao": "Gold Experience", "correto": true },
      { "opcao": "Stone Free", "correto": false },
      { "opcao": "Killer Queen", "correto": false }
    ]
  }
]

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");



// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta

document.getElementById("iniciar").onclick = function() { carregarPergunta(); };


function carregarPergunta() {
  document.querySelector("h1").style.display = "none";

  if(indiceAtual == 0) {
    conteudo.style.display = "flex";
    conteudoFinal.style.display = "none";
  }
 // document.getElementById("reiniciar").style.display = "none";    
  document.getElementById("iniciar").style.display = "none";
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
  indiceAtual = 0;
  acertos = 0;
  document.getElementById("reiniciar").display = "flex";
  document.getElementById("reiniciar").onclick = function() { carregarPergunta(); };
}

// PARTE 6: Tentar novamente
