import { useState, useContext } from "react";
import SalmonAvocadoSalad from "../images/SalmonAvocadoSalad.jpg";
import MealFinderContext from "../contexts/MealFinderContext";
import second from "../images/2.jpg";
import third from "../images/3.jpg";
import fourth from "../images/4.jpg";
import fifth from "../images/5.jpg";
import sixth from "../images/6.jpg";
import seventh from "../images/7.jpg";
import eighth from "../images/8.jpg";
import ninth from "../images/9.jpg";
import tenth from "../images/10.jpg";

function Recipe() {
    const contextData = useContext(MealFinderContext);
    const [recipeData, setRecipeData] = useState([
      {
        name: "Salmon Avocado Salad",
        imageSource: SalmonAvocadoSalad,
        category: "Seafood",
        country: "British",
        recipe: "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing. Heat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        ingredients: ["Salmon - 400g", "Avocado - 3", "Cucumber - 1", "Spinach - 400g", "Mint - 4 tbs", "Lime - zest and juice of 1", "Honey - 2 tsp", "Olive Oil - 3 tbs"]
      },
      {
        name: "Lamb Tagine",
        imageSource: second,
        category: "Lamb",
        country: "Moroccan",
        recipe: "Heat the olive oil in a heavy-based pan and add the onion and carrot. Cook for 3- 4 mins until softened. Add the diced lamb and brown all over. Stir in the garlic and all the spices and cook for a few mins more or until the aromas are released. Add the honey and apricots, crumble in the stock cube and pour over roughly 500ml boiling water or enough to cover the meat. Give it a good stir and bring to the boil. Turn down to a simmer, put the lid on and cook for 1 hour. Remove the lid and cook for a further 30 mins, then stir in the squash. Cook for 20 – 30 mins more until the squash is soft and the lamb is tender. Serve alongside rice or couscous and sprinkle with parsley and pine nuts, if using.",
        ingredients: ["Olive Oil - 2 tblsp", "Onion - 1 finely sliced", "Carrots - 2 chopped", "Lamb Leg - 500g", "Garlic - 2 cloves minced", "Cumin - ½ tsp", "Ginger - ½ tsp", "Saffron - ¼ tsp", "Cinnamon - 1 tsp", "Honey - 1 tblsp", "Apricot - 100g", "Vegetable Stock Cube - 1", "Butternut Squash - 1 medium chopped", "Couscous - Steamed", "Parsley - Chopped"]
      },
      {
        name: "Leblebi Soup",
        imageSource: third,
        category: "Vegetarian",
        country: "Tunisian",
        recipe: "Heat the oil in a large pot. Add the onion and cook until translucent. Drain the soaked chickpeas and add them to the pot together with the vegetable stock. Bring to the boil, then reduce the heat and cover. Simmer for 30 minutes. In the meantime toast the cumin in a small ungreased frying pan, then grind them in a mortar. Add the garlic and salt and pound to a fine paste. Add the paste and the harissa to the soup and simmer until the chickpeas are tender, about 30 minutes. Season to taste with salt, pepper and lemon juice and serve hot.",
        ingredients: ["Olive Oil - 2 tbs", "Onion - 1 medium finely diced", "Chickpeas - 250g", "Vegetable Stock - 1.5L", "Cumin - 1 tsp", "Garlic - 5 cloves", "Salt - 1/2 tsp", "Harissa Spice - 1 tsp", "Pepper - Pinch", "Lime - 1/2"]
      },
      {
        name: "Ribollita",
        imageSource: fourth,
        category: "Vegetarian",
        country: "Italian",
        recipe: "Put 2 tablespoons of the oil in a large pot over medium heat. When it’s hot, add onion, carrot, celery and garlic; sprinkle with salt and pepper and cook, stirring occasionally, until vegetables are soft, 5 to 10 minutes. Heat the oven to 500 degrees. Drain the beans; if they’re canned, rinse them as well. Add them to the pot along with tomatoes and their juices and stock, rosemary and thyme. Bring to a boil, then reduce heat so the soup bubbles steadily; cover and cook, stirring once or twice to break up the tomatoes, until the flavors meld, 15 to 20 minutes. Fish out and discard rosemary and thyme stems, if you like, and stir in kale. Taste and adjust seasoning. Lay bread slices on top of the stew so they cover the top and overlap as little as possible. Scatter red onion slices over the top, drizzle with the remaining 3 tablespoons oil and sprinkle with Parmesan. Put the pot in the oven and bake until the bread, onions and cheese are browned and crisp, 10 to 15 minutes. (If your pot fits under the broiler, you can also brown the top there.) Divide the soup and bread among 4 bowls and serve.",
        ingredients: ["Olive Oil - 5 tablespoons", "Onion - 1 chopped", "Carrot - 1 chopped", "Celery - 1 stalk chopped", "Garlic - 1 tablespoon minced", "Cannellini Beans - 2 cups", "Canned tomatoes - 1", "Water - 4 cups", "Rosemary - 1 fresh sprig", "Thyme - 1 fresh sprig", "Kale - 1 pound chopped", "Wholegrain Bread - 4 thick slices", "Red Onion - 1 thinly sliced", "Parmesan - ½ cup freshly grated"]
      },
      {
        name: "Chocolate Avocado Mousse",
        imageSource: fifth,
        category: "Dessert",
        country: "British",
        recipe: "1. Blend all the mousse ingredients together in your food processor until smooth. Add the cacao powder first and, as you blend, have all the ingredients to hand in order to adjust the ratios slightly as the size of avocados and bananas varies so much. The perfect ratio in order to avoid the dish tasting too much of either is to use equal amounts of both. 2. Taste and add a few drops of stevia if you feel you need more sweetness. 3. Fill little cups or shot glasses with the mousse, sprinkle with the cacao powder or nibs and serve. Tip If you don’t have a frozen banana to hand you can just use a normal one and then chill the mousse before serving for a cooling dessert.",
        ingredients: ["Banana - 1", "Cacao - 3 tbsp", "Avocado - 1", "Honey - 2 tblsp", "Lemon Juice - 1 tsp", "Vanilla - 1 tsp", "Water - 2 tbsp", "Sea Salt - pinch"]
      },
      {
        name: "Tamiya",
        imageSource: sixth,
        category: "Vegetarian",
        country: "Egyptian",
        recipe: "oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel. Grind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using. Refrigerate for at least 30 minutes. Shape the bean mixture into 1-inch balls.Flatten slightly and coat with flour. Heat at least 1½-inches of oil over medium heat to 365 degrees. Fry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce.",
        ingredients: ["Broad Beans - 3 cups", "Spring Onions - 6", "Garlic Clove - 4", "Parsley - 1/4 cup", "Cumin - 2 tsp", "Baking Powder - 1 tsp", "Cayenne Pepper - 1/2 tsp", "Flour - Spinkling", "Vegetable Oil - As required"]
      },
      {
        name: "Salted Caramel Cheescake",
        imageSource: seventh,
        category: "Dessert",
        country: "American",
        recipe: "1) Blitz the biscuits and the pretzels in a food processor and mix the biscuits with the melted butter. Spread on the bottom of an 8″/20cm Deep Springform Tin and press down firmly. Leave to set in the fridge whilst you make the rest! 2) Using an electric mixer, I use my KitchenAid with the whisk attachment, whisk together the cream cheese, vanilla, and icing sugar until smooth and then add the caramel and whisk again until smooth and lump free – this could take a couple of minutes, I whisk it at half speed so not too quick or slow! 3) Pour in the double cream & Salt flakes and continue to whisk for a couple of minutes until its very thick and mousse like (I mix it on a medium speed, level 6/10) – Now this could take up to 5 minutes depending on your mixer, but you seriously have to stick at it – it will hold itself completely when finished mixing (like a meringue does!) If you don’t mix it enough it will not set well enough, but don’t get impatient and whisk it really quick because that’ll make it split! Spread over the biscuit base and leave to set in the fridge overnight. 4) Remove the Cheesecake from the tin carefully and decorate the cheesecake – I drizzled over some of the spare caramel, and then some Toffee Popcorn and more Pretzels!",
        ingredients: ["Digestive Biscuits - 250g", "Pretzels - 75g", "Butter - 135g", "Cream Cheese - 450g", "Vanilla Extract - 1tsp", "Icing Sugar - 100g", "Caramel - 150g", "Sea Salt - 1tsp", "Double Cream - 300ml", "Caramel Sauce - drizzle", "Toffee Popcorn - Top", "Pretzels - Top"]
      },
      {
        name: "Pierogi (Polish Dumplings)",
        imageSource: eighth,
        category: "Side",
        country: "Polish",
        recipe: "To prepare the sauerkraut filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Add the drained sauerkraut and cook for an additional 5 minutes. Season to taste with salt and pepper, then remove to a plate to cool. For the mashed potato filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Stir into the mashed potatoes, and season with salt and white pepper. To make the dough, beat together the eggs and sour cream until smooth. Sift together the flour, salt, and baking powder; stir into the sour cream mixture until dough comes together. Knead the dough on a lightly floured surface until firm and smooth. Divide the dough in half, then roll out one half to 1/8 inch thickness. Cut into 3 inch rounds using a biscuit cutter. Place a small spoonful of the mashed potato filling into the center of each round. Moisten the edges with water, fold over, and press together with a fork to seal. Repeat procedure with the remaining dough and the sauerkraut filling. Bring a large pot of lightly salted water to a boil. Add perogies and cook for 3 to 5 minutes or until pierogi float to the top. Remove with a slotted spoon.",
        ingredients: ["Butter - 2 tbs", "Chopped Onion - 1/3 cup", "Sauerkraut - 1 1/2 cups", "Butter - 3 tbs", "Chopped Onion - 1/2 cup", "Potatoes - 2 cups", "Eggs - 3", "Sour Cream - 1 pot", "Flour - 3 cups", "Salt - 1/4 tsp", "Baking Powder - 1 tbs"]
      },
      {
        name: "Spanish Tortilla",
        imageSource: ninth,
        category: "Vegetarian",
        country: "Spanish",
        recipe: "Put a large non-stick frying pan on a low heat. Cook the onion slowly in the oil and butter until soft but not brown – this should take about 15 mins. Add the potatoes, cover the pan and cook for a further 15-20 mins, stirring occasionally to make sure they fry evenly. When the potatoes are soft and the onion is shiny, crush 2 garlic cloves and stir in, followed by the beaten eggs. Put the lid back on the pan and leave the tortilla to cook gently. After 20 mins, the edges and base should be golden, the top set but the middle still a little wobbly. To turn it over, slide it onto a plate and put another plate on top, turn the whole thing over and slide it back into the pan to finish cooking. Once cooked, transfer to a plate and serve the tortilla warm or cold, scattered with the chopped parsley. To accompany, take slices of warmed baguette, stab all over with a fork and rub with the remaining garlic, pile on grated tomatoes and season with sea salt and a drizzle of olive oil.",
        ingredients: ["Onion - 1 sliced", "Olive Oil - 4 tbsp", "Butter - 25g", "Potatoes - 400g", "Garlic - 6 cloves", "Eggs - 8", "Parsley - Handful", "Baguette - 1", "Vine Tomatoes - 4", "Olive Oil - drizzle"]
      },
      {
        name: "Peanut Butter Cookies",
        imageSource: tenth,
        category: "Dessert",
        country: "American",
        recipe: "Preheat oven to 350ºF (180ºC). In a large bowl, mix together the peanut butter, sugar, and egg. Scoop out a spoonful of dough and roll it into a ball. Place the cookie balls onto a nonstick baking sheet. For extra decoration and to make them cook more evenly, flatten the cookie balls by pressing a fork down on top of them, then press it down again at a 90º angle to make a criss-cross pattern. Bake for 8-10 minutes or until the bottom of the cookies are golden brown. Remove from baking sheet and cool. Enjoy!",
        ingredients: ["Peanut Butter - 1 cup", "Sugar - 1/2 cup", "Egg - 1"]
      }
    ]);
    

    return (
      <>
        <h1>{recipeData[contextData.randomIndex].name}</h1>
        <div><img src = {recipeData[contextData.randomIndex].imageSource} style = {{width: "300px", border: "5px solid white"}}/></div>
        <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
          <div style={{fontSize: "20px", border: "2px dashed white", borderRadius: "5px", marginTop: "25px", width: "50%", alignSelf: "center"}}>
            <p>{recipeData[contextData.randomIndex].category}</p>
            <p>{recipeData[contextData.randomIndex].country}</p>
          </div>
          <p style={{fontSize: "18px", width: "50%", alignSelf: "center", padding: "3px"}}>{recipeData[contextData.randomIndex].recipe}</p>
          <h2>Ingredients</h2>
          <ul style={{listStyleType: "none", display: "flex", flexWrap: "wrap", width: "50%", alignSelf: "center", justifyContent: "center"}}>
            {
              recipeData[contextData.randomIndex].ingredients.map((ingredient) => {
                return <li style={{marginRight: "0.8rem", border: "1px solid white", borderRadius: "5px", marginBottom: "0.5rem", color: "#54201c", backgroundColor: "white", fontWeight: "bold", padding: "3px"}}>{ingredient}</li>
              })
            }
          </ul>
        </div>
      </>
      
    );
  }
  
  export default Recipe;
  