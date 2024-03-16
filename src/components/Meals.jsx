import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

function Meals() {
  const {
    data: loaddedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error}/>
  }

  return (
    <div>
      <ul id="meals">
        {loaddedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

export default Meals;
