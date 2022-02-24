import { useContext } from "react";
import MealFinderContext from "../contexts/MealFinderContext";
import { ImShuffle } from "react-icons/im";

function ShuffleButton() {
    const MealFinderContextValues = useContext(MealFinderContext);
    return (
        <button id = "shuffleButton" style={{marginLeft: "0.5rem"}}
        onClick = {() => {
            MealFinderContextValues.setSearchMode(0);
            MealFinderContextValues.setShuffleMode(1);
            MealFinderContextValues.setRandomIndex((prev) => {
                if(prev < 9) {
                    return prev + 1;
                }
                else if(prev === 9){
                    return 0;
                }
            });
        }}
        ><ImShuffle/></button>
    );
  }
  
  export default ShuffleButton;
  