function descobrirLogica(sequencia) {
    const diferencas = sequencia.slice(1).map((num, index) => num - sequencia[index]);
    const razao = diferencas[0] / sequencia[0];
  
    // Verifica se é uma progressão aritmética
    if (new Set(diferencas).size === 1) {
      return `Progressão aritmética. Próximo elemento: {sequencia[sequencia.length - 1] + diferencas[0]}`;
    }
  
    // Verifica se é uma progressão geométrica
    if (sequencia.every((num, index) => index === 0 || Math.abs(num / sequencia[index - 1] - razao) < 0.001)) {
      return `Progressão geométrica. Próximo elemento: {sequencia[sequencia.length - 1] * razao}`;
    }
  
    // Verifica se é a sequência de Fibonacci
    if (sequencia.every((num, index) => index < 2 || num === sequencia[index - 1] + sequencia[index - 2])) {
      return `Sequência de Fibonacci. Próximo elemento: {sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]}`;
    }
  
    // Verifica se são quadrados perfeitos
    if (sequencia.every(num => Number.isInteger(Math.sqrt(num)))) {
      return `Quadrados perfeitos. Próximo elemento: {(sequencia.length + 1) ** 2}`;
    }
  
    // Verifica se são quadrados de números pares
    if (sequencia.every(num => Number.isInteger(Math.sqrt(num)) && Math.sqrt(num) % 2 === 0)) {
      return `Quadrados de números pares. Próximo elemento: {(sequencia.length + 1) ** 2 * 4}`;
    }
  
    return "Não foi possível identificar um padrão claro.";
  }