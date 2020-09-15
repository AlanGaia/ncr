//Retorna las coincidencias de string2 que hay en string1 sin distinguir mayusculas o minusculas
function anagrama(string1, string2){
  return string1.match(new RegExp('(\\w*' + string2 + '\\w*)','gi')).length;
}

console.log(anagrama('hola, que buena ola Laomir','OLA'));