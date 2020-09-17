//Funcion que ordena el string recibido por parámetro
function sortString(string) {
  return string.split('').sort().join('');
}

//En caso de encontrar un anagrama entre stringA y StringB retorna true caso contrario false
function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
  
  return sortString(stringA) === sortString(stringB)
}

//Funcion Principal
function matchesAndAnagrams(string1, string2){
  //Longitud de string2 para ir contando luego el ultimo caracter
  let lastCharacter = string2.length;
  let result = 0;
  //Recorro toda la cadena string1
  for (let i = 0; i < string1.length; i++) {
    //Corto la cadena string1 desde i a lastCharacter para ir comparando 
    let subString1 = string1.substring(i,lastCharacter)
    //Si hay coincidencia, sumo 1 a result
    if( anagrams(subString1,string2) ){
      result++;
    }
    //Mantengo la relacion, si a i le sumo 1 tambien a lastCharacter
    lastCharacter++
  }
  return result;
}

//Ejecucion
console.log(matchesAndAnagrams('hola, que buena ola Laomir','AOL'));