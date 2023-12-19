import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  originalPokemons: any[] = [];
  pokemons: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await lastValueFrom(
      this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=152')
    );

    this.originalPokemons = requisicao.results;
    this.atualizarLista();
  }

  buscarPokemonPorNome(nome: string): any | undefined {
    let result = this.pokemons.map((pokemon, index) => {
      if (pokemon.name === nome) {
        return {
          ...pokemon,
          idx: index + 1,
        };
      }
    });

    this.pokemons = result.filter(Boolean);
    return result.filter(Boolean);
  }

  restaurarListaCompleta() {
    this.atualizarLista();
  }

  private atualizarLista() {
    this.pokemons = [...this.originalPokemons];
  }

  listPokemon() {
    return this.pokemons;
  }
}
