// Criar lista com os 3 jogadores

personagens = ["","",""];

viloes = ["","",""];

forcaPersonagens = 0;
forcaViloes = 0;

for(let i =0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
  personagens[i] = escolhaPersonagem;
  // Força 
  forcaPersonagens += Math.floor(Math.random() * 10) + 1
  
}
console.log("Agora, o Array Personagens contém: " + personagens);

for(let i = 0; i < 3; i++){
  indiceAleatorio = Math.floor(Math.random() * 5);
  viloesPossiveis =  ["Dio Brando", "Enrico Pucci", "Kira Yoshikage", "Santana","Diavolo","Wamuu","Alessi","Kars"];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  forcaPersonagens += Math.floor(Math.random() * 10) + 1
}

console.log("Vilões: " + viloes);

alert("GRANDE BATALHA: " + personagens + " Vs. " + viloes);

if(forcaPersonagens > forcaViloes){
  alert("Seu time derrotou os vilões! ;)");
}
else if (forcaPersonagens < forcaViloes){
  alert("Seu time foi derrotado :(");
}
else{
  alert("EMPATE! :O");
}