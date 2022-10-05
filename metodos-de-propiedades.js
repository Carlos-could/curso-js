const reproductor = {
  reproducir : function (cancion) {
    console.log(`reproduciendo la canción: ${cancion}`);
  }
}

reproductor.reproducir('suavesito');

// agregar metodo por fuera del Objeto------------

reproductor.borrarCancion = function (x) {
  console.log(`Borrando cancion: ${x} !`);
}

reproductor.borrarCancion('merecumbe');
