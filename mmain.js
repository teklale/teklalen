prompt("ESTO ES TUYO")
// path: mmain.js
alert(" hi , you can not get in")

// var numero1 = prompt("introduce un numero")
// var numero2 = prompt("introduce otro numero")

// var resultado = parseInt(numero1) + parseInt(numero2);
// alert("El resultado es: " + resultado);
// let numero1 = 5;
// let numero2 = 10;

// let resultado = numero1 + numero2;
// console.log("Resultdos: " , resultado);

const form = document.querySelector("form");
const input = document.getElementById("btn");
 

input.addEventListener("click" , (e) => {     
 e.preventDefault();
    console.log(form.elements[0].value);
    console.log(form.elements[1].value);

    const nombre = form.elements[0].value;
    const contraseña = form.elements[1].value;


      if(nombre ==="8295134669" && contraseña === "brencader12"){
     return window.open("https://es-la.facebook.com/login/device-based/regular/login/")
      }
        else{return alert ("Datos incorrectos");
        }



}); 

console.log({form, input});
