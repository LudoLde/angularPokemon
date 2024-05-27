import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";

const routes: Routes = [
   { path: "pokemons", component: ListPokemonComponent },
   { path: "pokemons/:id", component: PokemonDetailsComponent },
   { path: "", redirectTo: "pokemons", pathMatch: "full" },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
