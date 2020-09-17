function tablones(A,B,C){
  //Buscar el maximo de B
  const MAX = Math.max(...B)
  //Que posicion esta
  const positionMAX = B.indexOf(MAX);
  // hay un C menor o igual que B y es mayor o igual que A?
  for (let i = 0; i < C.length; i++) {
    if (C[i] <= MAX && C[i] >= A[positionMAX]) {
      // retornar ese I + 1 (1 que representa la posicion 0)
      return i+1;
    }
  }
  // sino -1
  return -1;
}


console.log(tablones([1,4,5,8], [4,5,9,10], [4,6,7,10,3]));