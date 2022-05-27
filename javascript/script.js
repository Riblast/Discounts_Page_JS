
function calcularDescuento() {

let precio = document.getElementById("precio").value;

let descuento = document.getElementById("descuento").value;

if (precio == "" || descuento == "") {
    Swal.fire({
        icon: 'error',
        title: "Complete los cuadros",
        timer: 1500,
        confirmButtonText: "Ok",
        confirmButtonColor: "#eab208"
    })
}

if (!isNaN(precio) && !isNaN(descuento)){
    if (precio >= 1) {
        if(descuento<=100 && descuento>=1){
            let precioTotal = precio - (precio * descuento / 100);
            Swal.fire({
                title: "El precio total es " + precioTotal,
                timer: 1500,
                confirmButtonText: "Ok",
                confirmButtonColor: "#eab208"
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: "Ingrese un porcentaje válido (1-100)",
                timer: 1500,
                confirmButtonText: "Ok",
                confirmButtonColor: "#eab208"
            })
        }
    }
}
else{
    Swal.fire({
        icon: 'error',
        title: "Ingrese un número válido en los cuadros",
        timer: 1500,
        confirmButtonText: "Ok",
        confirmButtonColor: "#eab208"
    })
}
}