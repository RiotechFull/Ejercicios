let date = new Date();
console.log (date)

var nombre = 'Viviana';
var apellido = 'Guillen';

console.log(nombre+' '+apellido);

var año_nac =1978;
    var año_actual =new Date().getFullYear();
    console.log(año_actual-año_nac);

    //i++ o ++i

    let i = 0;
    
    console.log(i++);

    console.log(++i);
    
    console.log(i);


    document.getElementById('btn_alerta').onclick = function(){
        alert('Hola Mundo!');
    }



   let state = 0;
   function cambiarFondo(){   
    if(state == 0) {
        document.getElementById("p1").style.backgroundColor = "yellow";
        state = 1;
        }
    else { 
        document.getElementById("p1").style.backgroundColor = "red"
        state = 0;
    }
   }
   
   function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}
window.onload = function() {
    nacimiento = prompt('Ingrese su fecha de nacimiento (mm/dd/aa o aaaa):','');
    var edad = calcularEdad(nacimiento);
  console.log("Tiene " + edad + " años");
  document.getElementById("resultado").innerHTML = edad;
  document.getElementById("fechaNac").innerHTML = nacimiento;
};



console.log('Consola de Registro')
console.info('Consola de Informacion')
console.debug('Console de Depuracion')
console.warn('Consola de Aviso')
console.error('Consola de Error')

//estructuras repetitivas
//FOR
for(i=0; i<10; i++){
    console.count()
  }
//WHILE
while (i < 5) {
    text += "El numero es " + i;
    i++;
  }
  


// trabajando con Array

  let dispositivos = [
    {
        tipo : 'Celular',
        nombre: 'iPhone',
        marca: 'Apple'
    },
    {
        tipo : 'Celular',
        nombre: 'Galaxy',
        marca: 'Samsung'
    },
    {
        tipo : 'Notebook',
        nombre: 'Pavillion',
        marca: 'HP'
    },
    {
        tipo : 'Notebook',
        nombre: 'MAX15',
        marca: 'Bangho'
    }
  ]

  console.table(dispositivos)
  console.table(dispositivos, ['marca'])

  //dandole estilos a la salida por consola
  console.log("%c Este es un texto amarillo sobre un fondo azul.", "color:yellow; background-color:green")

  //consultar con API jsonplaceholder
  async function obtenUsuarios() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    let datos = await respuesta.json()
   
    console.table(datos, ['name', 'email'])
  }
  
  obtenUsuarios()