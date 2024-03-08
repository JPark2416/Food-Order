import { useState, useEffect } from "react";
import Header from "./components/Header";
import MealList from "./components/MealList";

function App() {
  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    fetch()
  })
  return (
    <>
      <Header />
      <MealList/>
    </>
  );
}

export default App;
