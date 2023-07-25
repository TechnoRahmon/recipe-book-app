import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Array<Recipe> = [
    new Recipe(
      'Garlic and lemon prawn pasta recipe',
      `With garlic butter prawns, vibrant veg and a hint of lemon, it only takes 5 ingredients and 15 minutes to throw together this fresh and fancy pasta. It is the ideal dish to whip up for any unexpected guests!`,
      'https://img.taste.com.au/mOx3fOxf/w720-h480-cfill-q80/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg'
      ),
      new Recipe(
        'Garlic and lemon prawn pasta recipe',
        `With garlic butter prawns, vibrant veg and a hint of lemon, it only takes 5 ingredients and 15 minutes to throw together this fresh and fancy pasta. It is the ideal dish to whip up for any unexpected guests!`,
        'https://img.taste.com.au/mOx3fOxf/w720-h480-cfill-q80/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg'
        )
  ];

}
