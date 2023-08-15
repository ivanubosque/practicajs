// Paises
let nom = prompt("Ingrese su nombre").toLocaleLowerCase()
let age = prompt("Ingrese su edad").toLocaleLowerCase()
let country = prompt("Ingrese el pais").toLocaleLowerCase()
let depart = prompt("Ingrese el departaento").toLocaleLowerCase()
if ((nom === null || nom === "") || (age === null || age === "" ) || (country === null || country === "") || (depart === null || depart === "")){
    alert("Ninguno de los campos debe ser vacio")
}else{
   /* nom = nom.toLocaleLowerCase();
    age = age.toLocaleLowerCase();
    country = country.toLocaleLowerCase();
    depart = depart.toLocaleLowerCase();*/
    becado(nom, age, country, depart)
}
function becado(n,a,c,d){
    if ((a > 18) && (c === "canada") && (d === "toronto")){
        alert("Felicitacion " +n +" usted obtuvo la beca");
    }else{
        alert(+n+" No cumples los requisitos para la beca");
    }
}