import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {MatDialog} from "@angular/material/dialog";
import {RecipeDetailComponent} from "../recipe-detail/recipe-detail.component";
import {Observable} from "rxjs";
import {RecipeDialogComponent} from "../recipe-dialog/recipe-dialog.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService,public dialog: MatDialog) { }

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
      data: {recipe}
    });
  }

}
