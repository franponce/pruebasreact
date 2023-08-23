import React from "react";

export default function Cuenta(prop) {
    let {cuenta} = prop;
  return (
    <div>
      {cuenta > 1 ? (
        <h1>Contamos {cuenta} obejitas.</h1>
      ) : (
        <h1>Contamos {cuenta} obejita.</h1>
      )}
      {cuenta && <h4>Que bueno a ver si nos dormimos</h4>}
    </div>
  );
}

// Que son los props. Los componentes padres le pasan a sus componentes hijos el dato
// Y encima ese dato se queda vivo, entonces cuando el padre de ese dato lo actualizan en su state, se lo pasa en su prop donde el componente por dentro lo agarra

