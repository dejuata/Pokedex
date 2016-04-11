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
	var url = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/00';
	var imagen = [];
	var pokemon = [ ['Bulbasaur',200,30,'Planta'] , ['Ivysaur',300,40,'Planta']   , ['Venusaur',600,60,'Planta'] , 
				    ['Charmander',200,30,'Fuego'] , ['Charmeleon',300,40,'Fuego'] , ['Charizard',600,60,'Fuego'] , 
				    ['Squirtle',200,30,'Agua']    , ['Wartotle',300,40,'Agua']    , ['Blastoise',600,60,'Agua'] ];

	for(var i = 1; i <= pokemon.length; i++)
	{
		imagen.push(url+i+'.png');		
	}
	for(var i = 0; i < pokemon.length; i++)
	{
		pokemon[i].push(imagen[i]);
	}

	var listado = [];	
	var div = document.getElementById('marco');	

	for(var i = 0; i < pokemon.length; i++)
	{
		nombre 	= pokemon[i][0];
		vida = pokemon[i][1];
		ataque = pokemon[i][2];
		tipo = pokemon[i][3];
		imagen = pokemon[i][4];

		var objeto = new Pokemon(nombre,vida,ataque,tipo,imagen);

		listado.push(objeto);

		var di  = document.createElement('div');
		var h2	= document.createElement('h2');
		var img = document.createElement('img');
		var p 	= document.createElement('p');
		var p1 	= document.createElement('p');
		var p2 	= document.createElement('p');

		h2.innerHTML= listado[i].nombre;
		img.src = listado[i].imagen;
		p.innerHTML = 'Vida = ' + listado[i].vida;
		p1.innerHTML = 'Ataque = '+ listado[i].ataque;		
		di.setAttribute('class','pokemon');
		p2.innerHTML =  listado[i].tipo;

		if(listado[i].tipo == 'Planta')
		{
			p2.classList.add('planta','tipo')

		}
		else if(listado[i].tipo == 'Fuego')
		{
			p2.classList.add('fuego','tipo')
		}
		else if(listado[i].tipo == 'Agua')
		{
			p2.classList.add('agua','tipo')
		}

		div.appendChild(di);
		di.appendChild(h2);
		di.appendChild(img);
		di.appendChild(p);
		di.appendChild(p1);
		di.appendChild(p2);
		}
	}









