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


  return (
    <div>
      <div>
        <img src="" alt="" /> 
      </div>
      <div>
        <h2>Title</h2>
        <p>Description</p>
        <ul>
          <li>
            Catogery:
            <strong>Dessert</strong>
          </li>
          <li>
            Area:
            <strong>Tunisian</strong>
          </li>
        </ul>
      </div>
      <h1>{meal.strMeal}</h1>
    </div>
  );
};

export default RandomMeal;