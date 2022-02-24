import { useContext, useState } from "react";
import MealFinderContext from "../contexts/MealFinderContext";

import "../SearchResult.css";
import search1 from "../images/search1.jpg";
import search2 from "../images/search2.jpg";
import search3 from "../images/search3.jpg";
import search4 from "../images/search4.jpg";
import search5 from "../images/search5.jpg";
import search6 from "../images/search6.jpg";
import search7 from "../images/search7.jpg";
import search8 from "../images/search8.jpg";


function SearchResult() {
  const [selectedFoodName, setSelectedFoodName] = useState("");
  const imageSources = [
        {
            source: search1,
            name: "Poutine",
            recipeObj : {
                name: "Poutine",
                imageSource: search1,
                category: "Miscellaneous",
                country: "Canadian",
                recipe: "Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C). Warm gravy in saucepan or microwave. Place the fries into the hot oil, and cook until light brown, about 5 minutes. Remove to a paper towel lined plate to drain. Place the fries on a serving platter, and sprinkle the cheese over them. Ladle gravy over the fries and cheese, and serve immediately.",
                ingredients: ["Vegetable Oil - Dash", "Beef Gravy - 1 Can", "Potatoes - 5 thin cut", "Cheese Curds - 2 cups"]
              }
        },
        {
            source: search2,
            name: "Lasagne",
            recipeObj : {
                name: "Lasagne",
                imageSource: search2,
                category: "Pasta",
                country: "Italian",
                recipe: "Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened. Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over. Stir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins. Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta. Put the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.",
                ingredients: ["Olive Oil - 1 tblsp", "Bacon - 2", "Onion - 1 finely chopped", "Celery - 1 Stick", "Carrots - 1 medium", "Garlic - 2 cloves chopped", "Minced Beef - 500g", "Tomato Puree - 1 tbls", "Chopped Tomatoes - 800g", "Honey - 1 tblsp", "Lasagne Sheets - 500g", "Creme Fraiche - 400ml", "Mozzarella Balls - 125g", "Parmesan Cheese - 50g", "Basil Leaves - Topping"]
            }
        },
        {
            source: search3,
            name: "Wontons",
            recipeObj: {
                name: "Wontons",
                imageSource: search3,
                category: "Pork",
                country: "Chinese",
                recipe: "Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl. Separate wonton skins. Place a heaping teaspoon of filling in the center of the wonton. Brush water on 2 borders of the skin, covering 1/4 inch from the edge. Fold skin over to form a triangle, sealing edges. Pinch the two long outside points together. Heat oil to 450 degrees and fry 4 to 5 at a time until golden. Drain and serve with sauce.",
                ingredients: ["Pork - 1lb", "Garlic Clove - 3 chopped", "Ginger - 1 tsp", "Soy Sauce - 1 tbs", "Sesame Seed Oil - 1 tsp", "Carrots - 3 finely chopped", "Celery - 3 finely chopped", "Spring Onions - 6 chopped", "Wonton Skin - 1 Packet", "Oil - Fry", "Water - Bottle"]
            }
        },
        {
            source: search4,
            name: "Kapsalon",
            recipeObj: {
                name: "Kapsalon",
                imageSource: search4,
                category: "Lamb",
                country: "Dutch",
                recipe: "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready. Bake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish. Cover the fries with a new layer of meat and spread evenly. Add a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted. Chop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union. Dived the salad over the dish and Serve with garlicsauce and hot sauce",
                ingredients: ["Fries - 250 Grams", "Doner Meat - 500 Grams", "Garlic sauce - Topping", "Hotsauce - Topping", "Lettuce - 1 Bulb", "Tomato - 1", "Cucumber - 3rd", "Gouda cheese - 100 Grams"]
            }
        },
        {
            source: search5,
            name: "Pancakes",
            recipeObj: {
                name: "Pancakes",
                imageSource: search5,
                category: "Dessert",
                country: "American",
                recipe: "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. Serve with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.",
                ingredients: ["Flour - 100g", "Eggs - 2 large", "Milk - 300ml", "Sunflower Oil - 1 tbls", "Sugar - to serve", "Raspberries - to serve", "Blueberries - to serve"]
            }
        },
        {
            source: search6,
            name: "Eton Mess",
            recipeObj: {
                name: "Eton Mess",
                imageSource: search6,
                category: "Dessert",
                country: "British",
                recipe: "Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration. Whip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using. Spoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint.",
                ingredients: ["strawberries - 500g", "double cream - 400ml", "meringue nests - 3 x 7.5cm", "ginger cordial - 1 tbsp", "Mint - sprigs of fresh"]
            }
        },
        {
            source: search7,
            name: "Roti john",
            recipeObj: {
                name: "Roti john",
                imageSource: search7,
                category: "Beef",
                country: "Malaysian",
                recipe: "Mix all the ingredients in a bowl. Heat a pan or griddle with a little vegetable oil. Pour the mixture onto the pan and place a piece of open-faced baguette on top. Press on the bread with a spatula and grill for 2 minutes. Turn the bread over to make it a little crispy. Remove from pan and cut the bread into small portions. Add mayonnaise and/or Sambal before cutting the sandwich (optional).",
                ingredients: ["Minced Beef - 1/4 lb", "Onion - 1", "Eggs - 3", "Chilli - 1 tbs", "Baguette - 1/2" ,"Salt - To taste", "Pepper - To taste", "Mayonnaise - Top"]
            }
        },
        {
            source: search8,
            name: "Mince Pies",
            recipeObj: {
                name: "Mince Pies",
                imageSource: search8,
                category: "Dessert",
                country: "British",
                recipe: "To make the pastry, rub 225g cold, diced butter into 350g plain flour, then mix in 100g golden caster sugar and a pinch of salt. Combine the pastry into a ball – don’t add liquid – and knead it briefly. The dough will be fairly firm, like shortbread dough. You can use the dough immediately, or chill for later. Preheat the oven to 200C/gas 6/fan 180C. Line 18 holes of two 12-hole patty tins, by pressing small walnut-sized balls of pastry into each hole. Spoon 280g mincemeat into the pies. Take slightly smaller balls of pastry than before and pat them out between your hands to make round lids, big enough to cover the pies. Top the pies with their lids, pressing the edges gently together to seal – you don’t need to seal them with milk or egg as they will stick on their own. (The pies may now be frozen for up to 1 month). Beat 1 small egg and brush the tops of the pies. Bake for 20 mins until golden. Leave to cool in the tin for 5 mins, then remove to a wire rack. To serve, lightly dust with icing sugar.",
                ingredients: ["Butter - 225g", "Plain Flour - 350g", "Caster Sugar - 100g", "Mincemeat - 280g", "Egg - 1 small", "Icing Sugar - Topping"]
            }
        }
    ];
  const contextValues = useContext(MealFinderContext);
  
  return (
      <>
        <h1>Search results for '{contextValues.text}':</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", margin: "10px"}}>
            {
                //<img src={imageSources[0].source} style = {{width: "25%"}}/>
                imageSources.filter((imageObj) => {
                    return imageObj.name.toLowerCase().includes(contextValues.text.toLowerCase().trim());
                }).map((filteredObj) => {
                    return (
                        <div className="wrapper" onClick = {() => {
                            console.log("image clicked");
                            setSelectedFoodName(filteredObj.name.toLowerCase());
                        }}>
                            <div className="food-wrapper">
                                <div className="food-name">{filteredObj.name}</div>
                            </div>
                            <div className="image-wrapper">
                                <img 
                                src={filteredObj.source} width= "300px" height="300px"
                                alt = {imageSources.name}/>
                            </div>
                        </div>
                        )
                    
                })
            }
        </div>
        <div>
            {imageSources.filter((obj) => {
                return obj.name.toLowerCase() === selectedFoodName;
            }).map((selected) => {
                 return <div>
                    <h1>{selected.recipeObj.name}</h1>
                    <div><img src = {selected.recipeObj.imageSource} style = {{width: "300px", border: "5px solid white"}}/></div>
                    <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                        <div style={{fontSize: "20px", border: "2px dashed white", borderRadius: "5px", marginTop: "25px", width: "50%", alignSelf: "center"}}>
                            <p>{selected.recipeObj.category}</p>
                            <p>{selected.recipeObj.country}</p>
                        </div>
                        <p style={{fontSize: "18px", width: "50%", alignSelf: "center", padding: "3px"}}>{selected.recipeObj.recipe}</p>
                        <h2>Ingredients</h2>
                        <ul style={{listStyleType: "none", display: "flex", flexWrap: "wrap", width: "50%", alignSelf: "center", justifyContent: "center"}}>
                            {
                            selected.recipeObj.ingredients.map((ingredient) => {
                                return <li style={{marginRight: "0.8rem", border: "1px solid white", borderRadius: "5px", marginBottom: "0.5rem", color: "#54201c", backgroundColor: "white", fontWeight: "bold", padding: "3px"}}>{ingredient}</li>
                            })
                            }
                        </ul>
                    </div>
                </div>
            })}
            
        </div>
      </>
  );
}

export default SearchResult;
