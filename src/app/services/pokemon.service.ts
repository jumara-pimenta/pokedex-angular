import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = [] as any[];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await lastValueFrom(
      this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=152')
    );

    this.pokemons = requisicao.results;
  }

  buscarPokemonPorNome(nome: string): any | undefined {
    let result = this.pokemons.map((pokemonio, index) => {
      if (pokemonio.name === nome) {
        return {
          ...pokemonio,
          idx: index + 1,
        };
      }
    });
    this.pokemons = result.filter(Boolean);
    return result.filter(Boolean);
  }
  listPokemon() {
    return this.pokemons;
  }
}
