escolha = prompt("Digite um número: 1.wons 2.baht 3.euros 4.dolar")
      switch(escolha) {
      case '1':
        valor = prompt("Digite um valor em wons")
        umvalor = 0.004
        convertido = valor * umvalor
        alert("R$" + convertido)

        break;
      case '2':
        valor = prompt("Digite um valor em bahts")
        umvalor = 0.1747
        convertido = valor * umvalor
        alert("R$" + convertido)
        break;
      case '3':
        valor = prompt("Digite um valor em euros")
        umvalor = 6.15  
        convertido =valor * umvalor
        alert("R$" + convertido)
        break;
      case '4':
        valor = prompt("Digite um valor em dolar")
        umvalor = 5.73  
        convertido = valor * umvalor
        alert("R$" + convertido)
        break;
      default:
        valor = prompt("Digite um valor em bahts")
        umvalor = 0.1747
        convertido = valor * umvalor
        alert("R$" + convertido)
        break;
      }