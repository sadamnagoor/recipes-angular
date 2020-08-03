import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.css']
})
export class RecipeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecipeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Recipe) {
    console.log(this.data);
  }

  ngOnInit(): void {
  }

}
