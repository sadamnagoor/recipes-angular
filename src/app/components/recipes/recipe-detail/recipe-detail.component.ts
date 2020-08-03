import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 @Input() recipes: Recipe[];
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
    (params: Params) => {
      this.id = +params.id;
      console.log(this.recipes);
      for (const rec of this.recipes){
        if (rec.id === this.id){
          this.recipe = rec;
        }
      }
    }
  );
  }

  getItem(): void {

  }

}
