let cred = prompt("Ingrese la contrasena")
if (cred === null || cred === ""){
    alert("Credencial no debe ser vacia")
}else{
    verify(cred);
}
function verify(c){
    if (c === "secreto123"){
        alert("Acceso concedido")
    }else{
        alert("Acceso Denegado")
    }
}