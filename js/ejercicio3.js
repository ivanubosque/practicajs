// Age calculator
let edad = prompt("Ingrse su edad");
if (edad === null || edad ===""){
    alert("Opcion Invalida")
}else{
    caledad(edad);
}
function caledad(e){
    if (e < 18){
        alert("Es menor de edad");
    }else{
        alert("Es Mayor de edad")
    }
}