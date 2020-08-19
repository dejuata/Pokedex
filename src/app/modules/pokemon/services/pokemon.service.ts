import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// rxjs
import { flatMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// own import
import { Pokemon, PokemonDetails } from '@pokemon/interfaces/pokemon.interface';
import { PokemonListDescriptor } from '@pokemon/type/pokemon-list.type';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  id: string

  constructor(
    private http: HttpClient
  ) { }

  getListPokemon() {
    return this.http.get<any>(`${environment.baseUrlAPI}`)
      .pipe(
        flatMap(data => {
          let results = []
          let next = of(data.next)
          results.push(next)
          this.getDataPokemon(data.results).map(ele => {
            results.push(ele)
          })
          return results
        })
      )
  }

  // Obtiene los detalles del Pokemon
  getDetailsPokemon(endpoint: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(endpoint)
  }

  // La api me responde con una endpoint para obtener detalles del pokemon
  // recorro el array de results realizando un nuevo get para obtener info extra.
  // Esto retorna un array de Observables :
  getDataPokemon(results: Array<Pokemon>): Observable<PokemonListDescriptor>[] {
    let arr: Observable<PokemonListDescriptor>[] = [];
    for (let i = 0; i < results.length; i++) {
      arr.push(
        this.getDetailsPokemon(results[i].url)
          .pipe(
            map(pokemon => {
              return PokemonListDescriptor.import(pokemon);
            })
          )
      )
    }
    return arr;
  }
}
