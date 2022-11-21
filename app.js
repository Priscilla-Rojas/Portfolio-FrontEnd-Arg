let Writeing= (texts) => {
    let arrFromStr = texts.split('');
    let iterator = 0;
    let printstr = setInterval(function(){
      
      document.querySelector(`.text`).textContent+= arrFromStr[iterator];
      
      iterator++;
      if (iterator === arrFromStr.length ) clearInterval(printstr)
    }, 100);
}

// Writeing('Curiosa, responsable y perfeccionista. Motivada a encontrar soluciones y crecer continuamente dondequiera que esté, tomando cada desafío como una oportunidad para mejorar.')
// Writeing(`Full Stack Developer. Curiosa, responsable y perfeccionista.
//           Motivada a encontrar soluciones y crecer continuamente dondequiera que esté, tomando cada desafío como una oportunidad para mejorar.`, '.write1')