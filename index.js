
function getPokemonData(identifier) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}/`)
    .then(response => response.json())
    .then(data => {
      const name = data.name;
      const attack = data.stats[4].base_stat;
      const hp = data.stats[5].base_stat;
      const speed = data.stats[0].base_stat;
      const imageUrl = data.sprites.front_default;

      // Actualiza los elementos HTML con los nuevos datos
      document.getElementById('pokemonName').textContent = name;
      document.getElementById('attack').textContent = `Ataque: ${attack}`;
      document.getElementById('hp').textContent = `Vida: ${hp}`;
      document.getElementById('speed').textContent = `Velocidad: ${speed}`;
      document.getElementById('pokemonImage').setAttribute('src', imageUrl);
    })
    .catch(error => {
      // Manejo de error si no se encuentra el Pokémon
      document.getElementById('pokemonName').textContent = 'No encontrado';
      document.getElementById('attack').textContent = '';
      document.getElementById('hp').textContent = '';
      document.getElementById('speed').textContent = '';
      document.getElementById('pokemonImage').setAttribute('src', 'pokemon-generic.png');
    });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  const identifier = document.getElementById('searchInput').value; // Obtiene el valor del campo de entrada

  // Llama a la función para obtener los datos del Pokémon
  getPokemonData(identifier);
});
