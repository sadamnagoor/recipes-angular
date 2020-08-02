import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // private url = "http://starlord.hackerearth.com/recipe";

  constructor(private http: HttpClient) {
  }

  private recipes: Recipe[] = [   {
    id:0,
    name:"Uthappizza",
    imagepath: "https://i.imgur.com/tDnjTXf.jpg",
    category:"mains",
    label:"Hot",
    price:"4.99",
    description:"A unique combination of Indian Uthappam (pancake) and Italian pizza"

  },
    {
      id:1,
      name:"Zucchipakoda",
      imagepath:"https://i.imgur.com/xkUElXq.jpg",
      category:"appetizer",
      label:"",
      price:"1.99",
      description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"

    },
    {
      id:2,
      name:"Vadonut",
      imagepath:"https://i.imgur.com/anUAlqF.jpg",
      category:"appetizer",
      label:"New",
      price:"1.99",
      description:"A quintessential ConFusion experience, is it a vada or is it a donut?"

    },
    {
      id:3,
      name:"ElaiCheese Cake",
      imagepath:"https://i.imgur.com/c5hBTEW.jpg",
      category:"dessert",
      label:"",
      price:"2.99",
      description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"

    },
    {
      id:4,
      name:"Guntur chillies",
      imagepath:"https://i.imgur.com/Vc9JIXP.jpg",
      category:"appetizer",
      label:"Spicy",
      price:"0.99",
      description:"Assorted chillies from Guntur"

    },
    {
      id:5,
      name:"Buffalo Paneer",
      imagepath:"https://i.imgur.com/pH2tkgk.jpg",
      category:"appetizer",
      label:"",
      price:"5.99",
      description:"A special type of Paneer made from Buffalo milk"

    },
    {
      id:6,
      name:"Cherry Tomatoes",
      imagepath:"https://i.imgur.com/fRy8hjE.jpg",
      category:"clone",
      label:"clone",
      price:"9.99",
      description:"clone of cherry and tomato"

    },
    {
      id:7,
      name:"Goat Milk",
      imagepath:"https://i.imgur.com/zFGPhrI.jpg",
      category:"weird",
      label:"weird",
      price:"1.99",
      description:"Medicinal Goat Milk"

    },
    {
      id:8,
      name:"Rose breasted Grosbeak chicken",
      imagepath:"https://i.imgur.com/RYsqgoo.jpg",
      category:"appetizer",
      label:"New",
      price:"7.99",
      description:"Roasted rare bird"

    },
    {
      id:9,
      name:"Toenail Zingy",
      imagepath:"https://i.imgur.com/IpG3YOT.jpg",
      category:"appetizer",
      label:"weird",
      price:"0.99",
      description:"Cooked Toenails of various animals"

    }
  ];

  getRecipes(): Recipe[]{
    // return this.http.get<Recipe>(`${this.url}`);
    return this.recipes.slice();
  }
  getRecipe(id: number): Recipe{
    // return this.http.get<Recipe>(`${this.url}/${id}`);
    return this.recipes[id];
  }
}
