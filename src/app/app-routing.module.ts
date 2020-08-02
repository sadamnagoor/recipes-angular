import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "./components/recipes/recipes.component";
import {RecipeDialogComponent} from "./components/recipes/recipe-dialog/recipe-dialog.component";
import {RecipeDetailComponent} from "./components/recipes/recipe-detail/recipe-detail.component";

const routes: Routes = [
  {path: '',redirectTo:'/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
      {path: '', component: RecipeDialogComponent},
      {path: ':id', component: RecipeDetailComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
