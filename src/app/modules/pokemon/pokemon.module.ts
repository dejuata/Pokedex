

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from '@pokemon/pokemon-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { PokemonListComponent } from '@pokemon/components/pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule
  ]
})
export class PokemonModule { }
