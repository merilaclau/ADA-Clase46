// USAR REDUCE PARA ENCONTRAR EL NÚMERO MÁS GRANDE DE UN STRING
numString = [89, 70, 101, 5, 8, 44];

const findLargestNum = () => {
    const largestNum = numString.reduce((result, currentNum) => result < currentNum ? currentNum : result); //Result toma el primer valor por defecto cuando no es un objeto. Acá usamos tb if ternario
    alert(`El número más grande es ${largestNum}`);
}

findLargestNum(numString);

//Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra. La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no (si "A" y "a" cuentan como dos letras distintas o no)
//Ejemplo:
/* findOcurrencies("Hello World", ["o", "l"])

/** returns
{
  hello: {
    o: 1,
    l: 2
  },   
  world: {
    o: 1,
    l: 1
  }
}*/

//SOLUCIÓN CON FUNCIÓN COMPLEMENTARIA

let obj = {};

const getLetterCount = (palabra, letra, caseSensitive) => {
  let letterCount = 0;
  if (caseSensitive) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] == letra) {
        letterCount++;
      }
    }
  }
  else {
    let palabraLowCase = palabra.toLowerCase();
    for (let i = 0; i < palabraLowCase.length; i++) {
      if (palabraLowCase[i] == letra) {
        letterCount++
      }
    } 
  }
  return letterCount;
}

const findOcurrencies = (frase, letras, caseSensitive) => {
    let arrayPalabras = frase.split(' ');
    arrayPalabras.forEach(palabra => {
      obj[palabra] = {};
      letras.forEach(letra => {
        obj[palabra][letra] = getLetterCount(palabra, letra, caseSensitive);
      });
    });
    console.log(obj);
}

findOcurrencies("Hello world", ["h","l"], true);

//SOLUCIÓN CON REDUCE
let obj = {};

const findOcurrencies = (frase, letras, caseSensitive) => {
  let arrayPalabras = frase.split(' ');
  arrayPalabras.forEach(palabra => {
    obj[palabra] = {};
    letras.forEach(letra => {
      arrayPalabraPorLetra = palabra.split("");
      obj[palabra][letra] = arrayPalabraPorLetra.reduce((acumulador, letras) => {
        if (caseSensitive) {
          if (letras == letra) {
            acumulador++
          }
        }
        else {
          if (letras.toLowerCase() == letra) {
            acumulador++
          }
        }
        return acumulador;
      }, 0)
    });
  });
  console.log(obj);
}

findOcurrencies("Hello world", ["h","l"], true);