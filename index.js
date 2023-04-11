var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(JSON.parse(this.responseText));
  }
});
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/bulbasaur");
xhr.send(null);
54e