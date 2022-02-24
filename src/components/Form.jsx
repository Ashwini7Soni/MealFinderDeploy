import SearchButton from "./SearchButton";
import { useContext } from "react";
import MealFinderContext from "../contexts/MealFinderContext";
import { BsSlack } from "react-icons/bs";

function Form() {
    const MealFinderContextValues = useContext(MealFinderContext);
    return (
    <>
        <div >
            <input type={"text"} 
            value = {MealFinderContextValues.text} 
            id = "inputText" 
            placeholder = "Search for meals or keywords" style={{
                width: "18rem",
                height: "1.5rem"
            }}
            onChange = {(event) => {
                MealFinderContextValues.setText(event.target.value);
            }}
            style = {{
                border: "2px solid green",
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "70px",
                paddingRight: "70px"
            }}
            />
            <SearchButton text = {MealFinderContextValues.text}/>
        </div>  
    </>
    );
}

export default Form;
