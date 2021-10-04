import React, { useEffect, useState } from 'react';

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";


const RandomMeal = () => {
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    /*
    fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      setMeal(res.meals[0]);
    });
    */

    async function getMeal() {
      const res = await fetch(API_URL);
      const data = await res.json();

      setMeal(data.meals[0]);
    };

    getMeal();
  }, []);

  if(!meal) return null;

  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory
  } = meal;

  return (
    <div className="meal">
      <div className="meal-img">
        <img src={strMealThumb} alt={strMeal} /> 
      </div>
      <div className="meal-details">
        <h2 className="meal-title">{strMeal}</h2>
        <p className="meal-instruction">
          {strInstructions.substring(0, 200) + "..."}
        </p>
        <ul className="meal-info">
          <li>
            Catogery
            <strong>{strCategory}</strong>
          </li>
          <li>
            Area
            <strong>{strArea}</strong>
          </li>
        </ul>
        <button className="btn">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RandomMeal;