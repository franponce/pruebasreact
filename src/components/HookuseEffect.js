import {useEffect} from 'react';

export default function HookuseEffect() {
    useEffect(()=>{
console.log(Me ejecuto);
},[]) // Con ",[]" se le dice a las dependencias que queremos que escuche useEffect 
  return (
    <div>HookuseEffect</div>
  )
}

// Con useEffect  le estamos indicando a React que el componente tiene que hacer algo después de renderizarse
// useEffect se ejecuta todas las veces siempre y cuando nosotros no le pasemos una dependencia especial que queremos que escuche

// useEffect con ",[]" es un listener, si algo cambia corre pero solo una vez
