alert ("Bienvenid@ al sitio de Bravecto. Aqui vas a encontrar el mejor bocadito para desparasitar a tu mascota.")
let tuNombre = prompt ("Ingresa tu nombre")
let nombreMascota = prompt("Ingresa el nombre de tu mascota");
let mascota = prompt("¿Tu mascota es un perro o un gato?");
    
let pesoMascota;
let cantidad;
let valorUnidad; 

while (mascota.toLowerCase ()!= "perro" && mascota.toLowerCase () != "gato"){
    mascota = prompt ("Ingresa una mascota valida: Perro o Gato")
}
if (mascota.toLowerCase() == "perro") {
    alert("¡Muy bien! Pasemos a elegir el producto indicado para desparasitar a " + nombreMascota);
    pesoMascota = prompt(`¿Cuantos kg. pesa?\n1. 2 - 10 kg.\n2. 11 - 20 kg.\n3. 21 - 55 kg.`);
    while (pesoMascota != 1 && pesoMascota != 2 && pesoMascota!=3) {
        pesoMascota = prompt(`Ingrese un valor valido\n¿Cuantos kg. pesa?\n1. 2 - 10 kg.\n2. 11 - 20 kg.\n3. 21 - 55 kg.`);

   
    }

    cantidad = prompt ("¿Cuántas unidades deseas comprar?")

    switch (pesoMascota){
        case "1":
        valorUnidad = 2500;
        break;
        case "2":
        valorUnidad = 2600;
        break;
        case "3":
        valorUnidad = 2750;
        break;
    
    }

    let precioTotal = valorUnidad * cantidad;

    alert ("El total de tu compra es de $ "+ precioTotal) 
    alert ("Te redirigimos al sitio de pago. Saluda a " + nombreMascota +" de nuestra parte!")
    
} else{
    alert("Lo siento, no contamos con stock para "+ nombreMascota+" en este momento, intentalo nuevamente más tarde.");

}
