import { useState, useEffect } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [meals, setMeals] = useState([]);

  async function fetchMeals() {
    try {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        throw new Error("response is not OK : fetchMeals()");
      }
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div>
      <ul id="meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

export default Meals;
