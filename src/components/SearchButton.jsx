import { useContext } from "react";
import MealFinderContext from "../contexts/MealFinderContext";
import { BsSearch } from "react-icons/bs";

function SearchButton({text}) {
  const MealFinderContextValues = useContext(MealFinderContext);
  return (
    <button
    onClick={() => {
        if(text === "") {
            alert("Please enter a search term");
        }
        else {
            MealFinderContextValues.setSearchMode(1);
            MealFinderContextValues.setShuffleMode(0);
        }
    }}
    style = {{height: "1.8rem"}}
    ><BsSearch /></button>
  );
}

export default SearchButton;
