import { PokemonSearchComponent } from './../pokemon-search/pokemon-search.component';
import { PokemonService } from './../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './../pokemon-card/pokemon-card.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    PokemonCardComponent,
    CommonModule,
    PokemonSearchComponent,
    FormsModule,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonService) {}
}
