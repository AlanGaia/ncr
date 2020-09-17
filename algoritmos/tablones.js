//Función principal
function tablones(a,b,c){
  //Buscar el maximo de B
  const MAX = Math.max(...b)
  //Que posicion esta
  const positionMAX = b.indexOf(MAX);
  // hay un C menor o igual que B y es mayor o igual que A?
  for (let i = 0; i < c.length; i++) {
    if (c[i] <= MAX && c[i] >= a[positionMAX]) {
      // retornar ese I + 1 (1 que representa la posicion 0)
      return i+1;
    }
  }
  // sino -1
  return -1;
}

//Ejecución
console.log(tablones([1,4,5,8], [4,5,9,10], [4,6,7,10,3]));