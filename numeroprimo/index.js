function listarnumerosprimos() {
    //Esse for é uma repetição aonde o 'num' é igual a dois e vai até 1000 aonde a cada iteração se adiciona 1 ao 'num'
    for (var num = 2; num <= 1000; num++) {
      var éprimo = true;
  
      //Aqui temos outra repetição, ele é usado pra verificar se o 'num' é primo ou não, aonde 'i' começa sendo 2 e vai até o 'num-1', ele verifica se o 'num' é divisivel por algum numero entre 2 e 'num-1', se for igual a 0 temos que 'num' não é prmo
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          éprimo = false;
          break;
        }
      }
      //Se o 'num' for primo e der 'true', roda o 'console.log(num)' e imprime o numero primo
      if (éprimo) {
        console.log(num);
      }
    }
  }