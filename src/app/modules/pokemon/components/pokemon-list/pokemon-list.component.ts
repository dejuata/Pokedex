import { Component, OnInit, Inject, HostListener } from '@angular/core';
// Imports
import { PokemonService } from '@pokemon/services/pokemon.service';
import { PokemonListDescriptor, PokemonDetailsDescriptor } from '@pokemon/type/pokemon-list.type';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  response: PokemonListDescriptor = {
    next: null,
    results: null
  };
  pokemons: PokemonDetailsDescriptor[] = [];
  showGoUpButton = false;

  private hideScrollHeight = 200;
  private showScrollHeight = 200;

  constructor(
    private pokemonService: PokemonService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.getPokemons('');

  }

  ngOnInit(): void {
    this.onScrollDown();
  }

  getPokemons(next: string): void {
    this.pokemonService.getListPokemon(next)
      .subscribe((data: any) => {
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

  onScrollDown(): void {
    if(this.response.next) {
      this.getPokemons(this.response.next);
    }
  }

  onScrollTop(): void {
    // Enviar hacia el top el contenido de la web
    this.document.documentElement.scrollTop = 0;
  }

  // Decorador que declara un evento DOM para escuchar y proporcionar
  // un metodo controlador para ejecutarse cuando se produce ese evento
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    let top = (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop);
    if (top > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && top < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

}
