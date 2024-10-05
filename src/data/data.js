export let personajes = [];

//Funcion para obtener datos de la API

export const fetchDataApi = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP Error ! status: ${res.status}`);
    }

    const data = await res.json();
    personajes = data.results;
  } catch (error) {
    console.log("Error al conectar con los datos de personajes: " + error);
  }
};
