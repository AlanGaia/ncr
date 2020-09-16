const reducer = (acum,currentValue) => acum + currentValue;

//Retorna la cantidad de clavos necesarios
const clavosNecesarios = (comienzoDelTablon, finDelTablon) => {
  let tablonA = comienzoDelTablon.reduce(reducer);
  let tablonB = finDelTablon.reduce(reducer);

  return tablonB - tablonA;
}

//Funcion Principal
function tablones(A,B,C){
  const clavosRequeridos = clavosNecesarios(A,B);

  //Inicializo los clavos disponibles con la cantidad que hay en C[0]
  let clavosDisponibles = C[0];

  for (let i = 0; i < C.length; i++) {
    if (clavosDisponibles >= clavosRequeridos) {
      return i;
      //Cuando tenga esa cantidad o más retorno el resultado
    }

    //Si no me alcanzan sumo los siguietes clavos a los que tengo disponibles
    clavosDisponibles += C[i+1];
  }
  //Caso contrario, retorno -1 porque no tengo los clavos disponibles
  return -1;
}

console.log(tablones([1,4,7],[3,5,10],[1,3,3]));

