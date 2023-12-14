import { PokemonService } from './../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input() pokemon: string = '';
  @Input() numero: number = 0;
  @Input() url: string = '';

  constructor(public pokemonService: PokemonService) {}

  pegarImagemPokemon() {
    const index = this.pokemonService.listPokemon();
    let codigo = index.find((item) => item);
    const numeroFormatado = this.leadingZero(codigo.idx ?? this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  //leadingZero: recebe uma string e coloca 0s na

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
