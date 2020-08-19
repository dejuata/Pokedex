import { Component, OnInit } from '@angular/core';
// Imports
import { PokemonService } from '@pokemon/services/pokemon.service';
import { PokemonListDescriptor, PokemonDetailsDescriptor } from '@pokemon/type/pokemon-list.type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  response: PokemonListDescriptor;
  pokemons: PokemonDetailsDescriptor[] = [];

  constructor(
    private pokemonService: PokemonService
  ) {
    this.getPokemons();
  }

  ngOnInit(): void {
  }

  getPokemons(): void {
    this.pokemonService.getListPokemon()
      .subscribe(data => {
        this.response = data;
        for (let i = 0; i < this.response.results.length; i++) {
          this.getDetailsPokemons(this.response.results[i].url)
        }
      },
      err => {
        console.log(err)
      })

  }

  getDetailsPokemons(url: string): void {
    this.pokemonService.getDetailsPokemon(url)
      .subscribe(pokemon => {
        this.pokemons[pokemon.id - 1] = pokemon
      })
  }

}
