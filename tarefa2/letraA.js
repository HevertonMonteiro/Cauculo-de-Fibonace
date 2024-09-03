function contarLetrasA(texto) {

    texto = texto.toLowerCase();
  
   
    let contador = 0;
  
    
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === 'a') {
        contador++;
      }
    }
  
    return contador;
  }
  
 
  const texto = "Ana ama Maria mais do que Aninha amou" ;
  const quantidade = contarLetrasA(texto);
  
  console.log("A letra 'a' aparece "+ quantidade+" vezes no texto.");