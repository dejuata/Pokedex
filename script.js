//Definiendo atributos del pokemon
function Pokemon(nombre,vida,ataque,tipo,imagen)
{
	this.nombre = nombre;
	this.vida	= vida;
	this.ataque	= ataque;
	this.tipo 	= tipo;
	this.imagen = imagen;
}

function cargarPokemon()
{
	//Variables que contienen ruta de imagenes de pokemon
	var bulbasaur  = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png";
	var charmander = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png";
	var squirtle   = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png";
	var pikachu	   = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png";

	//Creando el pokemon
	var pokemon0 = new Pokemon("Bulbasaur", 150, 50, "Planta", bulbasaur);
	var pokemon1 = new Pokemon("Charmander", 100, 70, "Fuego", charmander);
	var pokemon2 = new Pokemon("Squirtle", 100, 70, "Agua", squirtle);
	var pokemon3 = new Pokemon("Pikachu", 90, 60, "Electrico", pikachu);

	var arreglo = [pokemon0,pokemon1,pokemon2,pokemon3];

	var div = document.getElementById("marco");
	
	for(var i = arreglo.length - 1; i >= 0; i-- ){

		var h2	= document.createElement("h2");
		var img = document.createElement("img");
		var p 	= document.createElement("p");
		var p1 	= document.createElement("p");
		var p2 	= document.createElement("p");
		
		h2.innerHTML= arreglo[i].nombre;
		img.src = arreglo[i].imagen;
		p.innerHTML = "Vida = " + arreglo[i].vida;
		p1.innerHTML = "Ataque = "+ arreglo[i].ataque;
		p2.innerHTML = "Tipo = "+ arreglo[i].tipo; 

		div.appendChild(h2);
		div.appendChild(img);
		div.appendChild(p);
		div.appendChild(p1);
		div.appendChild(p2);

	}
	
}






