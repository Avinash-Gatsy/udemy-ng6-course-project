import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani 1',
      'Chicken biryani is a simple dish of chicken and rice.',
      'http://www.authenticroyal.com/wp-content/uploads/2017/07/Royal_ChickenProvencal_Horizontal-square.jpg'),
    new Recipe('Chicken Biryani 2',
      'Chicken biryani is a simple dish of chicken and rice.',
      'http://www.authenticroyal.com/wp-content/uploads/2017/07/Royal_ChickenProvencal_Horizontal-square.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
  }

}
