const BASE_URL = "https://ecommerce.fedegonzalez.com";
const TOKEN = "luciosanti";

export async function obtenerProductos() {
  const respuesta = await fetch(`${BASE_URL}/products/?skip=0&limit=100`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }
  return respuesta.json();
}