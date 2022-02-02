const botonEnviar = document.getElementById("enviar-nota");

botonEnviar.addEventListener("click", ()=>{
    let resultado, mensaje; 
    try{
        prevRes =  parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)) {
            throw "Error";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verAprobacion(8,5,prevRes);
    } catch (e){
        resultado = "Error"
        mensaje = "Error en el ingreso de datos."
    }
    abrirModal(resultado, mensaje)
})

const definirMensaje = (pr)=>{
    let resultado; 
    switch (pr){
        case 1: resultado = "Insuficiente. Nota: 1";
        break;
        case 2: resultado = "Insuficiente. Nota: 2";
        break;
        case 3: resultado = "Insuficiente. Nota: 3";
        break;
        case 4: resultado = "Insuficiente. Nota: 4";
        break;
        case 5: resultado = "Insuficiente. Nota: 5";
        break;
        case 6: resultado = "Satisfactorio. Nota: 6";
        break;
        case 7: resultado = "¡Bien! Nota: 7";
        break;
        case 8: resultado = "¡Muy bien! Nota: 8";
        break;
        case 9: resultado = "¡Muy bien! Te felicito. Nota: 9";
        break;
        case 10: resultado = "¡Excelente! Nota: 10";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verAprobacion = (nota1, nota2, prevRes)=> {
    promedio = Math.round((nota1 + nota2 + prevRes) / 3);
    if (promedio >=7) {
        return  ["Aprobado", ` tu promedio es ${promedio}`];
    } 
    return ["Desaprobado",  ` tu promedio es ${promedio}`]
}

const abrirModal = (r,m) => {
    document.querySelector(".resultado").innerHTML = r;
    document.querySelector(".mensaje").innerHTML = m;

    let modal = document.querySelector(".modal-container");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
    
} 