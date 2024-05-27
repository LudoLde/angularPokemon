import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock.pokemon";
import { ActivatedRoute } from "@angular/router";

@Component({
   selector: "app-pokemon-details",
   templateUrl: "./pokemon-details.component.html",
})
export class PokemonDetailsComponent implements OnInit {
   pokemonList: Pokemon[];
   pokemon: Pokemon | undefined;

   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.pokemonList = POKEMONS;

      const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
      if (pokemonId) {
         this.pokemon = this.pokemonList.find((pokemon) => pokemon.id == +pokemonId);
         console.log(this.pokemon);
      }
   }
}
