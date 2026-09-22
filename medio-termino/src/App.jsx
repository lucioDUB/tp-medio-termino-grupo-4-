import { useEffect, useState } from "react";
import { obtenerProductos } from "./api/ecommerce";

function App() {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => setDatos(respuesta))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <h1>Probando conexión con la API...</h1>;
  if (error) return <h1 style={{ color: "red" }}>Error: {error}</h1>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>¡Conexión a la API exitosa!</h1>
      <p>Respuesta recibida del servidor:</p>
      <pre style={{ background: "#f4f4f4", padding: "15px", borderRadius: "5px" }}>
        {JSON.stringify(datos, null, 2)}
      </pre>
    </div>
  );
}

export default App;
