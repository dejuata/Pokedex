import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// rxjs
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// own import
import { PokemonListDescriptor, PokemonDetailsDescriptor } from '@pokemon/type/pokemon-list.type';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  id: string

  constructor(
    private http: HttpClient
  ) { }

  getListPokemon(endpoint: string): Observable<PokemonListDescriptor> {
    endpoint = endpoint == '' ? `${environment.baseUrlAPI}` : endpoint;
    return this.http.get<PokemonListDescriptor>(endpoint)
      .pipe(
        map(data => {
          return PokemonListDescriptor.import(data)
        })
      )
  }

  getDetailsPokemon(endpoint: string): Observable<PokemonDetailsDescriptor>  {
    return this.http.get<PokemonDetailsDescriptor>(endpoint)
      .pipe(
        map(data => {
          return PokemonDetailsDescriptor.import(data)
        })
      )
  }


}
