//Ejercicio 1

let numero = Number((prompt("Ingrese un numero")))
let i= 1
while(i <= numero){
    if(i%5==0){
        console.log(i)
    }
    i++
}

//Ejercicio 2

let numero2 = Number(prompt("Ingrese un numero un numero entre el 1 y el 50"))
let numero3 = Number(prompt("Ingrese un numero un numero entre el 1 y el 50"))

let j =1
while(j<=50){
    if(j==numero2 || j == numero3){
        console.log("Loteria")
    }
    else{
        console.log(j)
    }
    j++
}
//Ejercicio 3
let numero4
let arreglo = []
while(numero4!=0){
    numero4 = Number(prompt("Ingrese un numero un numero"))
    arreglo.push(numero4)
}
console.log(arreglo)

//Ejercico 4 

let palabra 
let cadena = []

while(palabra != ''){
    palabra = prompt("ingrese una palabra o una letra:")  //ingreso las palabras hasta que no ingrese nada en el prompt
    cadena.push(palabra) //los guardo en un array
}
cadena.pop() //le quito el ultimo elemento pues no me aporta nada
let nueva = cadena.toString() //lo convierto a string con el metodo ToString()
let texto2 = nueva.replaceAll(","," ")  //Elimino todas las comas generadas por el metodo anterior, con replaceAll()
console.log(texto2)


//Ejercicio 5

let dia= ''
while (dia!= "domingo" && dia != "Domingo"){
    dia= prompt("Ingrese un dia de la semana");
    console.log("Ten un buen " + dia) 
}
console.log("Ve a descanzar")


