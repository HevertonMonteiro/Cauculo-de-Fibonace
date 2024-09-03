function pertenceFibonacci(num) {
    let a = 0;
    let b = 1;
    
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num;
}

const numero = 144;
if (pertenceFibonacci(numero)) {
  console.log('O numero '+ numero+' Pertence a sequência da Fibonacci');
} else {
  console.log('O numero '+ numero+' Não pertence a sequência da Fibonacci');
}















