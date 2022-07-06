//  * Practica grupal 1.1
//  * Imprimir todos los números pares que existen entre 1 y ese numero
//  * p.ej. 12 -> 2,4,6,8,10,12
 
// Con for 
const evenRange = parseInt( prompt('Escribe un numero') )
for(i = 1; i <= evenRange; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
    
//con while o do while 
while(counter < evenRange.length){
    if(i % 2 === 0){
        console.log(i)
    }
    counter++;
}
        
// ___________________________________________________

// Practica grupal1.2 // *Pedir al usuario una oración
// *Imprimir un string con todas las vocales
// *Imprimir un string con todas las consonantes
// *p.ej. "Hola mundo"
// *Consonantes -> hlmnd
// *Vocales -> oauo
// *

// Con For 
const phrase = prompt('Escribe una frase').toLowerCase()
let vowels = ''
let consonants = ''
for(let i = 0; i < phrase.length; i++ ){

if(phrase[i] !== ' ' && phrase[i] !== ',' && phrase[i] !== '.'){
    if(
        phrase[i] == 'a' ||
        phrase[i] == 'e' ||
        phrase[i] == 'i' ||
        phrase[i] == 'o' ||
        phrase[i] == 'u' ||
        phrase[i] == 'á' ||
        phrase[i] == 'é' ||
        phrase[i] == 'í' ||
        phrase[i] == 'ó' ||
        phrase[i] == 'ú'
    ){
        vowels += phrase[i]
    } else {
        consonants += phrase[i]
    }
}
}
console.log(vowels)
console.log(consonants)

//con while o do while 
const phrase = prompt('Escribe una frase').toLowerCase()
let vowels = ''
let consonants = ''
counter = 0
while(counter < phrase.length){
if(phrase[counter] !== ' ' && phrase[counter] !== ',' && phrase[counter] !== '.'){
    if(
        phrase[counter] == 'a' ||
        phrase[counter] == 'e' ||
        phrase[counter] == 'i' ||
        phrase[counter] == 'o' ||
        phrase[counter] == 'u' ||
        phrase[counter] == 'á' ||
        phrase[counter] == 'é' ||
        phrase[counter] == 'í' ||
        phrase[counter] == 'ó' ||
        phrase[counter] == 'ú'
    ){
        vowels += phrase[counter]
    } else {
        consonants += phrase[counter]
    }
}
counter++
}

console.log(vowels)
console.log(consonants)

// ______________________________________________________

// Practica grupal 1.3 // 
// Pedir el usuario una palabra
// Invertir esa palabra e imprimirla en consola
// p.ej. 'Hola' -> 'aloh'
    
    // Con For 
const nameUser = window.prompt('Escribe una palabra')
let stringReversed = ''
let finCadena = nameUser.length - 1
    
for( let i = finCadena; i >= 0; i-- ){
    stringReversed += nameUser[i]
}
    
console.log(stringReversed)
    
    
    // con while o do while 
    const nameUser = window.prompt('Escribe una palabra')
let stringReversed = ''
    
counter = nameUser.length -1
    
while(counter >= 0){
    stringReversed += nameUser[counter]
    counter--
}
console.log(stringReversed)
         
        