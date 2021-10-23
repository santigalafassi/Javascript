// let numero = 5.3
// let palabra = "hola mundooo"
// let respuesta = true;
// const pi = 3.14;
// console.log(numero, palabra, respuesta, pi);

// let cadena = "aver que onda"
// console.log(cadena.length);
// console.log(cadena.toUpperCase());

// let pasaMayus = (cadena.toUpperCase())

// /*para buscar un parametro, solo indica el primero que encuentre, no todos los que hay*/
// console.log(palabra.indexOf("o"));

// /*para reemplazar un parametro, indico primero cual cambiar, luego el que va a aparecer nuevo*/
// console.log(cadena.replace("onda", "tal"))

// /*para quitar una porcion, o todo, indico desde donde hasta donde quiero mostrar, si no indico un segundo numero muestra hasta el final*/
// console.log(cadena.substring(3, 10))

// /*.slice se utiliza para escribir valores negativos, ejemplo (-3) muestra solo los ultimos tres caracteres*/

// /*comprueba si la cadena empieza con TAL valor, devuelte TRUE o FALSE*/
// console.log(cadena.startsWith("a"))
// console.log(palabra.startsWith("m", 5))

// /*lo mismo con .endsWith*/

// /*igual que indexOf pero devuelve TRUE o FALSE*/
// console.log(cadena.includes("v"))

//repite el string
// console.log(cadena.repeat(5))


// let numrandom = (Math.random()*100)
// console.log(Math.ceil(numrandom))

// console.log(Math.round(Math.random()*100))



// /*CONDICIONALES*/
// let num1 = 0
// let num2 = 0

// if(num1>0){ 
//     console.log(num1 + " es mayor que 0");
// }else if(num1<0){
//     console.log(num1 + " es menor que 0")
// }else{
//     console.log("el número es 0")
// }

// /*&& significa AND*/
// if(num1>0 && num2>0){
//     console.log(`${num1} y ${num2} son mayores que 0`)
// }
//  /*|| significa O (lo escribo con SHIFT + TECLA ARRIBA DE ENTER)*/
//  if(num1>0 || num2>0){
//     console.log(`${num1} o ${num2} son mayores que 0`)
//  }


 /*anidar condicionales= meter un if dentro de otro*/
//  if(num1>0){
//     if(num2>0){
//           console.log(`${num1} y ${num2} son mayores que 0`)
//       }else if(num2<0){
//           console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`)
//       }else{
//           console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`)
//       }
//   }else if(num1 <0){
//       if(num2>0){
//           console.log(`${num1} es menor a 0 y ${num2} es mayor a 0`)
//       }else if(num2<0){
//           console.log(`${num1} y ${num2} son menores que 0`)
//       }else{
//           console.log(`${num1} es menor a 0 y ${num2} es igual a 0`)
//       }
//   }else{
//       if(num2>0){
//          console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`)
//       }else if(num2<0){
//          console.log(`${num1} es igual a 0 y ${num2} es menor que 0`)
//       }else{
//           console.log(`${num1} y ${ num2} son iguales a 0`)
//       }
//  }

 /*Probando mas condicionales*/

//  let palabra1 = "hola"
//  if(palabra1.length==4){
//      console.log(palabra1 + " tiene 4 letras")
//  }

//  /*EJERCICIO ORDENAR 3 NUMEROS*/
//  const numbers = document.getElementById("numbers");
//  const result = document.getElementById("result");

//  let a=prompt("Introduzca el primer número")
//  let b=prompt("Introduzca el segundo número")
//  let c=prompt("Introduzca el tercer número")

//  numbers.textContent = `Los números introducidos son ${a} ${b} ${c}`

//  /*EJERCICIO*/
// if(a>=b && a>=c){
//     if(b>c){
//         result.textContent = `El orden es: ${a}, ${b}, ${c}`
//     }else{
//         result.textContent = `El orden es: ${a}, ${c}, ${b}`
//     }
// }else if(b>=a && b>=c){
//     if(a>c){
//         result.textContent = `El orden es ${b}, ${a}, ${c}`
//     }else{
//         result.textContent = `El orden es ${b}, ${c}, ${a}`
//     }
// }else if(c>=a && c>=b){
//     if(a>b){
//         result.textContent = `El orden es ${c}, ${a}, ${b}`
//     }else{
//         result.textContent = `El orden es ${c}, ${b}, ${a}`
//     }
// }

// let num = 3
// switch(num){
//     case 1: console.log(`${num} tiene el valor 1`)
//     break;
//     case 2: console.log(`${num} tiene el valor 2`)
//     break;
//     default: console.log(`${num} no vale ni 1 ni 2`)
//     break;
// }

// switch(num){
//     case 1:
//     case 3:
//     case 5:
//     console.log(`${num} es impar`)
//     break;
//     case 2:
//     case 4:
//     console.log(`${num} es par`)
// }

/*OPERADOR TERNARIO*/
// let num2 = 2;

// (num2 % 2 == 0) ? console.log(`${num2} es par`) : 
//     console.log(`${num2} es impar`)

/*ARRAYS*/
// ENTRE CORCHETES SIEMPRE, se cuenta desde la posicion 0
// let numeros=[1, 2, 3, 4, 5];
// console.log(numeros[0])

// let palabras=["hola", 'estamos', 'en', 'udemy']
// console.log(`La palabra "${palabras[1]}" tiene ${palabras[1].length} letras`)

// //array.length
// //array.isArray devuelve si la variable es un array o no
// let numEjemplo = 4
// console.log(Array.isArray(numEjemplo))

//Eliminar un elemento
// .shift() elimina el primer elemento del array y lo devuelve
// .pop() elimina el ultimo elemento y lo devuelve
    // console.log(numeros)
    // numeros.shift()
    // console.log(numeros)
    // // numeros.pop()
    // console.log(numeros)


// Agregar elementos
// .push(elemento1, elemento2,...) agrega elementos al final del array y devuelve la nueva longitud
// .unshift(elemento1, elemento2...) agrega elementos al principio del array y devuelve la nueva longitud
// console.log(numeros)
// numeros.push(6, 7)
// console.log(numeros)
// numeros.unshift(-1, 0)
// console.log(numeros)

//.indexOf() devuelve en que posicion del array esta la primer coincidencia del valor especificado, si no encuentra ninguno devuelve -1
// console.log(numeros.indexOf(7))
//.lastIndexOf parecido, pero cuenta desde atrás, devuelve la ultima coincidencia del valor especificado

//.reverse() invierte el orden de los elementos
// console.log(numeros)
// console.log(numeros.reverse())
// console.log(numeros.reverse())

// //.join(separador) devuelve un string separado con el caracter que indiquemos (por defecto son comas). Puedo separar los elementos por guiones por ejemplo, o puntos, etc.
// console.log(numeros.join("?"))
// console.log(numeros) 

// //.splice(a, b, items) cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//     //a. indice de inicio
//     //b. numero de elementos (opcional)
//     //items. elemento a añadir en caso que se añadan (opcional)
// numeros.splice(3) //elimina desde la posicion 3 hasta el final
// numeros.splice(2, 2) //elimina desde la posicion 2: 2 valores
// console.log(numeros) 


//.slice(a, b) extrae elementos de un array desde el indice a hasta el indice b. Si no hay indice b extrae elementos hasta el final.

//LOOPS
// let pass = ''

// while (pass != 'hola'){
//     pass = prompt('introdzuca la contraseña')
// }
// console.log('Fin del bucle')

// do{
//     pass = prompt('Introduzca la contraseña')
// }while (pass != 'hola')


//BUCLE FOR for(let i=0; i<=10,i++){codigo a ejecutar}
    // sintaxis: 3 partes 
    //     iniciacion de variable
    //     numero de vueltas
    //     incremento o decremento 
    //     for(let i=0; i<=10,i++){
    //         codigo a ejecutar
    //     }

let numeros = [0,1,2,3,4,5]
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

// for(let i=10; i>=0; i--){
//     if(i!=5){
//         console.log(i)
//     }
    
// }

//BUCLE FOR OF / FOR IN
//simplifica el bucle FOR tradicional, sin tener que darle tantas vueltas

//OF devuelve el VALOR, es decir el nombre, lo que esta escrito
let names = ['Mariano', 'Martin', 'Mirtha', "Miriam"]
for(let name of names){
    console.log(name)
}

//IN devuelve el índice del array, la posicion en la que esta cada item, empezadno desde 0