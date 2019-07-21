import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt="" />
            <h1>{title}</h1>
            <p>Calories : {Math.floor(calories)} cal</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
