import Form from "./Form";
import Recipe from "./Recipe";
import SearchResult from "./SearchResult";
import ShuffleButton from "./ShuffleButton";
import { useState } from "react";
import MealFinderContext from "../contexts/MealFinderContext";


function MealFinder() {
  const [searchMode, setSearchMode] = useState(0);
  const [shuffleMode, setShuffleMode] = useState(0);
  const [text, setText] = useState("");
  const [randomIndex, setRandomIndex] = useState(-1);
  
  return (
      <MealFinderContext.Provider
      value={{
        searchMode: searchMode,
        shuffleMode: shuffleMode,
        setSearchMode: setSearchMode,
        setShuffleMode: setShuffleMode,
        text: text,
        setText: setText,
        randomIndex: randomIndex,
        setRandomIndex: setRandomIndex
      }}
      >
        <div className="mealfinder" style={{backgroundColor: "#54201c", color: "white"}}>
          <h1 style={{textAlign: "center"}}>Meal Finder</h1>
          <div style={{display: "flex", justifyContent: "center"}}>
              <Form/>
              <ShuffleButton/>
          </div>
          <div style={{textAlign: "center"}}>
            { (searchMode === 1)? <SearchResult/>: <div></div>}
            { (shuffleMode === 1)? <Recipe/>: <div></div>}
          </div>
          
        </div>
      </MealFinderContext.Provider>
  );
}

export default MealFinder;
