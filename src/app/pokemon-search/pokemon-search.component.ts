import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './../services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pokemon-search.component.html',
  styleUrl: './pokemon-search.component.css',
})
export class PokemonSearchComponent {
  searchTerm: string = '';
  foundPokemon: any | undefined;

  constructor(private pokemonService: PokemonService) {}

  buscarPokemon() {
    this.foundPokemon = this.pokemonService.buscarPokemonPorNome(
      this.searchTerm
    );
  }

  restaurarListaCompleta() {
    this.pokemonService.restaurarListaCompleta();
    this.searchTerm = '';
    this.foundPokemon = undefined;
  }
}
