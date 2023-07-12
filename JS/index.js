function enviar(){
    const nombre = document.getElementById("nombre").value
    const correo = document.getElementById("correo").value
    const edad = document.getElementById("edad").value
    const comentarios = document.getElementById("comentarios").value 
    if (nombre == "" || correo == "" || edad == "" || comentarios == ""){
        
        alert("No se admiten campos vacios")

    }else if(nombre.value == "nombre" && correo.value == "correo" && edad.value == "edad" && comentarios.value == "comentarios") {
        alert("el nombre es:"+ nombre.value+ "su edad es: "+ edad.value)

    }


}
