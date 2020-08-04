import { Component, OnInit } from '@angular/core';

import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe.model";
import {RecipeDialogComponent} from "./recipe-dialog/recipe-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(returnedData => {
      this.recipes = returnedData;
      console.log(this.recipes);
    });
  }

  openDialog(recipe: Recipe): void{
    this.dialog.open(RecipeDialogComponent, {
      width: '500px',
      height: '380px',
      data: recipe
    });
  }
}
