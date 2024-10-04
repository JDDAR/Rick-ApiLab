export let personajes = [];
console.log(" Estos son personajes" + personajes);

//Obteniendo los personajes de la api
const fetchDataApi = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    personajes = data.results;
    console.log("resultados: " + personajes);
  } catch (error) {
    console.log("Error fetching data: " + error);
  }
};
export default fetchDataApi;
