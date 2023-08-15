let nom = prompt("Ingrese su nombre");
if (nom === null || nom === ""){
    alert("Nombre no debe ser vacio")
}else{
    oneclick(nom)
}
function oneclick(n){
    alert("!Hola! " +n +" espero estes disfrutando de JavaScript.")
}