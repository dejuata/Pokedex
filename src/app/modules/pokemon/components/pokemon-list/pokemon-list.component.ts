import { Component, OnInit } from '@angular/core';

// Imports
import { PokemonService } from '@pokemon/services/pokemon.service';
import { Pokemon } from '@pokemon/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {

    this.pokemonService.getListPokemon()
      .subscribe(pokemon => {
        console.log(pokemon)
       pokemon.subscribe(data => {
          console.log('2', data)
        })
      })
  }

}
