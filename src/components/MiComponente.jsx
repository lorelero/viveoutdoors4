import React, { useEffect, useState } from "react";

const MiComponente = () => {
  const [data, setData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/productos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, [apiUrl]); // La dependencia es apiUrl

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando...</p>}
    </div>
  );
};

export default MiComponente;
