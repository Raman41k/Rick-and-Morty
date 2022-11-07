import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MainResolver} from "./services/resolvers/main.resolver";
import {CharactersComponent} from "./components/characters/characters.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, runGuardsAndResolvers:'paramsOrQueryParamsChange' ,resolve:{data:MainResolver} , children: [],

  },
  {path: ':id', component:CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
