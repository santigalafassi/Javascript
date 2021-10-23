//OBJETOS
//contiene datos que representan sus PROPIEDADES, VALORES Y ACCIONES
//Pares de clave (KEY): (VALUE)
//Para acceder a sus propiedades se utiliza el PUNTO (objeto.propiedad)
// const person = {
//     name: 'Juan',
//     age: 26,
//     sons: ['Laura', 'Diego', 'Corintio', 'Paulo Magno']
// }

// console.log(person.name);
// console.log(person['name']);

// for(const key in person){
//     console.log(person[key])
// }

// //esto imprime EL INDICE del array (vamos a ver numeros, no el nombre de cada hijo)
// for(const son in person.sons){
//     console.log(son)
// }

// //esto imprime el VALOR del array
// for(const son of person.sons){
//     console.log(son)
// }

// console.log(`Hola ${person.name}. Tenes ${person.age} años y tus hijos se llaman 
// ${person.sons.join(', ')}.`)


//FUNCIONES
//fragmentos de código que ejecuta una tarea, sirve para no volver a escribir
//el mismo código mas de una vez
// function nombreFuncion(){
//     //código a ejecutar
// }
// const nombreFuncion = () => {
//     //código a ejecutar
// }
// //LAS FUNCIONES PUEDEN RECIBIR PARÁMETROS DENTRO DE SUS PARENTESIS
// //LAS FUNCIONES PUEDEN DEVOLVER VALORES
// function nombreFuncion(paramentro1, parametro2){
//     return parametro1 + parametro2
// }

// const nombreFuncion = (parametro1, paramentro2) => parametro1 + parametro2
// var names = prompt('cual es tu nombre?')
// const saludar=()=>console.log('hola')
// const saludarUser=(user)=>console.log(`hola ${user}`)

// saludar()
// saludarUser(names)
// saludarUser('pepe')

// const suma=(num1, num2)=>{
//    return num1+num2
// }

// console.log(suma(2, 3))

// let result=(suma(3, 6))
// console.log(result)


//PROGRAMACION ORIENTADA A OBJETOS
//clases fundamentales: Clase, herencia, objeto, método, evento.
//CLASES: plantillas para crear objetos iguales, se dice INSTANCIAR un objeto
//necesitamos una funcion CONSTRUCTORA, se las invoca de la siguiente forma:
// class Persona{
//    constructor(nombre, apellido, edad){
//       this.nombre = nombre
//       this.apellido = apellido
//       this.edad = edad
//    }
// }

// //Los objetos pueden tener funciones asociadas, se llaman MÉTODOS
// //nuevo objeto a paritr del constructor: se escribe NEW
// const juan = new Persona('Juan', 'Gomez', 23)

// class Persona{
//    constructor(nombre, apellido, edad){
//       this.nombre = nombre
//       this.apellido = apellido
//       this.edad = edad
//       this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
//    }
//    saludar(){
//       return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
//    }
// }

// const juan = new Persona('Juan', 'García', 25)
// const marta = new Persona('Marta', 'García', 23)

// console.log(juan)
// console.log(juan.saludar())
// console.log(marta.saludar())

//EJERCICIO
// class Libro{
//    constructor(titulo, autor, year, genero){
//       this.titulo = titulo
//       this.autor = autor
//       this.year = year
//       this.genero = genero
//    }
//    infoLibros(){
//       return `${this.titulo} fue escrito por ${this.autor} en el año ${this.year} y
//       pertenece al genero ${this.genero}`
//    }
//    getAutores(){
//       return this.autor
//    }
// }

// let listaLibros = []
// while (listaLibros.length < 3){
//    let titulo = prompt('Introduzca el titulo del libro')
//    let autor = prompt('Introduzca el autor del libro')
//    let year = prompt('Introduzca el año del libro')
//    let genero = prompt('Introduzca el genero del libro')

//    if (titulo != "" &&
//       autor != "" &&
//       !isNaN(year) &&
//       year.length == 4 &&
//       (genero == 'aventura' || genero == 'fantasia' || genero == 'terror')){

//       listaLibros.push(new Libro(titulo, autor, year, genero))
//       }
   
// }

// const displayLibros = () => {
//    console.log(listaLibros)
// }

// displayLibros()

// const mostrarLibros = () =>{
//    for (const libro of listaLibros){
//       console.log(libro.getAutores())
//    }
// }


//MÉTODOS DE LOS ARRAYS
.from(iterable) convierte en array el elemento iterable

.sort([callback]) ordena los elementos de un array alfabeticamente (valor unicode), si le
pasamos un callback ordena en funcion del algoritmo que le pasemos

.forEach(callback(currentValue, [index]) ejecuta la funcion indicada una vez por cada elemento del array

.some(callback) comprueba si al menos un elemento del array cumple la condicion

.every(callback) comprueba si todos los elementos del array cumplen la condicion

.map(callback) transforma todos los elementos del array y devuelve un nuevo array

