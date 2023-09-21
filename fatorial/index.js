function factorialize(num) {
    // Se num = 0 OU num = 1, o fatorial retornará 1
    if (num === 0 || num === 1)
      return 1;
    
    // Começamos o laço FOR loop com i = 5
    // Diminuímos i em uma unidade após cada iteração 
    for (var i = num - 1; i >= 1; i--) {
      num *= i; 
    }
    return num;
  }
  for (var i = 1; i <= 10; i++) {
    console.log("Fatorial de " + i + ": " + factorialize(i)); }
