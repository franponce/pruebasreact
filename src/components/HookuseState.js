import {useState, useEffect} from "react";

export default function Hooks() {
    const [cuenta, setCuenta] = useState(0);
    const handleClick = ()=> {
        setCuenta(cuenta+1);
        console.log(cuenta);
    };
    return (
        <div>
            {cuenta == 0 ?(<h1>Arranquemos a contar a ver si nos dormimos</h1>):(
            <div>
            {cuenta>1 ?(<h1>Contamos {cuenta} obejitas.</h1>):(<h1>Contamos {cuenta} obejita.</h1>)}
            {cuenta && <h4>Que bueno a ver si nos dormimos</h4>}
            </div>
            )}
            <button onClick={handleClick} type="button" class="btn btn-success">
                Contar otra
            </button>
        </div>
    );
}

//Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función. Los hooks no funcionan dentro de las clases — te permiten usar React sin clases ya que tenemos desde las ultimas actualizaciones componentes funcionales 

// A nivel componente necesitamos una memoria
// Ejemplo carrito de compras, tenemos que al agregar productos vamos sumando productos 
