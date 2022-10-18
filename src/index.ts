import "./styles.css";

//EN LA LINEA 5 INGRSO PROPMPT

//let condition: any = prompt("Es culpable? Ingrese si o no");
const resultado = document.getElementById("resultado");


//De la linea 10 a la 16 ingreso por imput de html
let dato :number = document.getElementById("dato");
let btn = document.getElementById("btn");

//ESCUCHO EL BOTON Y ALMACENO LOS DATOS CAPTURADOS DEL INPUT PARA SER USADOS
btn.addEventListener("click", () => {
  let condition: string = Number(dato.value);
  console.log(condition)
  const resultado = document.getElementById("resultado");

switch (condition) {
  case 1:
    console.log("MEDALLA ORO");
    resultado.innerText = "Ud eligio sin gratinado paga 1.90$";
    break;
  case "2":
    console.log("MEDALLA PLATA");
    resultado.innerText = "Ud eligio gratinado de KitKat paga 1.50$.";
    break;
  case "3":
    console.log("MEDALLA BRONCE");
    resultado.innerText = "Ud eligio gratinado de oreo paga 1$.";
    break;
  default:
  case "":
    console.log("RETIRE SU CERTIFICADO POR ADMINISTRACION");
    resultado.innerText = "RETIRE SU CERTIFICADO POR ADMINISTRACION";
    break;
}