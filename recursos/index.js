window.onload=()=>{
  const boton = document.getElementById('modo-aleatorio');
  const grupo = document.querySelector('.grupo');
  const carta = document.querySelectorAll('.carta');

  function mezclarCartas() {
    const secciones = Array.from(grupo.children);

      //Elimino el girada, volviendolas a poner boca abajo
    secciones.forEach(sec => {
      const carta = sec.querySelector('.carta');
      carta.classList.remove('girada');
    });

    // Añado una pequeña animacion insertada en el css  
    secciones.forEach(sec => {
      const carta = sec.querySelector('.carta');
      carta.classList.add('barajando');
    });

    //Suavizamos la desaparicion con el fade del css
    grupo.classList.add('fade');

    // Esperamos a que acabe la animacion
    setTimeout(() => {
      // Quitar animación
      secciones.forEach(sec => {
        const carta = sec.querySelector('.carta');
        carta.classList.remove('barajando');
      });

      // Mezclamos las cartas
      for (let i = secciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [secciones[i], secciones[j]] = [secciones[j], secciones[i]];
      }

      // Recolocamos las cartas barajadas
      grupo.innerHTML = '';
      secciones.forEach(sec => grupo.appendChild(sec));

      // Añadimos el fade de vuelta
      grupo.classList.remove('fade');
    }, 600); // IMPORTANTE:CAMBIAR AQUI TAMBIEN EL TIEMPO SI SE MUEVE EN CSS 
    // esta en milisegundos cada segundo añadido al css son 1000 aqui
  }

  //a cada carta le añado el evento de entrar con el raton y le añado la clase girada siendo ahora carta.girada 
  carta.forEach(carta => {
   carta.addEventListener("mouseenter",(a)=>carta.classList.toggle('girada'));   
  });
  
 
  boton.addEventListener('click', mezclarCartas);
};
