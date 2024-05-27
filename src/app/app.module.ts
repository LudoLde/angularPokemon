import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { PokemonTypeDesignPipe } from "./Pipes/pokemon-type-design.pipe";
import { PokemonBorderDesignDirective } from "./Directives/pokemon-border-design.directive";

@NgModule({
   declarations: [AppComponent, ListPokemonComponent, PokemonDetailsComponent, PokemonTypeDesignPipe, PokemonBorderDesignDirective],
   imports: [BrowserModule, AppRoutingModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
