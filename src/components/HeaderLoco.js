// Importaciones
import React from "react";

// El componente en si 
const HeaderLoco = () => {
  // aca iria todo nuestro codigo JS
  let nombre = "Fran";
  const styles = {
    p:{
      color: "red",
      backgroundColor: "orange",
    }
  }

  const handleClicMarcelo = (e)=>{
    const quien = e.target.getAttribute("name");
    if(quien == "Secondary") {
      alert("Hola soy secondary y hago esto");
    }
  }

  const handleChange = (e)=>{
    console.log(e.target.value);
  }

  return (
    // aca esta todo lo que se ve del componente
    <div>
      <button type="button" class="btn btn-primary" name="Primary" onClick={handleClicMarcelo}>Primary</button>
      <button type="button" class="btn btn-secondary" name="Secondary"onClick={handleClicMarcelo}>Secondary</button>
      <button type="button" class="btn btn-success" name="Success"onClick={handleClicMarcelo}>Success</button>
      <input type="text" onChange={handleChange}/>

      <h1>Hola perri mi nombre es {nombre}</h1>
      <p style={styles.p}>Esto es un p color rojo y el back en naranja</p>

    </div>
  );
};
// Por ultimo va la exportacion 
export default HeaderLoco;