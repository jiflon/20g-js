// ! Conditionals 

//? Estructuras de control selectivas 

    //?Simples 
    // const montoMinimo = 2000;
    // let montoCompra = 2500;

    // if(montoCompra >= montoMinimo)  {
    //     console.log('Elegible a MSI');
    // }

    //? Doble 
    // const montoMinimo = 2000;
    // let montoCompra = 1500;

    // if(montoCompra >= montoMinimo)  {
    //     console.log('Elegible a MSI');
    // }
    // else {
    //     console.log('MSI no estan disponibles ')
    // }

    //?Multiples 
    // const montoMinimo = 2000;
    // let montoCompra = 1900;

    // if(montoCompra >= montoMinimo)  {
    //     console.log('Elegible a MSI');
    // }
    // else if(montoCompra + 100 >= 2000)  {
    //     console.log('Agrega $100 o mas a tu compra y accede a MSI')
    // }
    // else {
    //     console.log('MSI no estan disponibles ')
    // }

    //?Anidacion o nesting de condicionales 
    // const num = parseInt(prompt('Ingresa un numero a evaluar'))

    // if(num >= 0)    {
    //     // codigo 
    //     if (num == 0)   {
    //         console.log('El numero ingresado es 0');
    //     }
    //     else    {
    //         console.log('El numnero es positivo');
    //     }
    // }
    // else {
    //     console.log('El numero es negativo!')
    // }


//? Ternary operator 

    // ? Sintaxis 
    //     // <evaluacion> ? <resultado si es verdadero>  : <resulatdo si es falso></resulatdo>

    // let notaExamen = parseInt(prompt('Ingresa tu nota: '));

    // let resultado =  notaExamen >= 7 ? "Felicidades pasaste" : 'Reprobaste'

    // console.log(resultado)

    // //? Nesting ternary 
    // let a = -1 
    // let result = a >= 0 ? a == 0 ? 'Zero' : 'Positive' : 'Negativo'
    // console.log(result)

// Switch 

// let a = 2 