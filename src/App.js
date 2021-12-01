import "./App.css";
import foodsJSON from "./foods.json";
import { Row } from "antd";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [filteredFoods, setFilteredFoods] = useState(foodsJSON);

  const addFood = (newFood) => {
    setFilteredFoods([...foods, newFood]);
  };

  const deleteFood = (name) => {
    setFilteredFoods(
      filteredFoods.filter((food) => {
        return food.name !== name;
      })
    );
  };

  const searchFilter = (text) => {
    setFilteredFoods(
      foods.filter((food) => {
        return food.name.toLowerCase().includes(text.toLowerCase());
      })
    );
  };

  return (
    <>
      <AddFoodForm addFood={addFood} />
      <Search searchFilter={searchFilter} />
      <h1 id="title">Food List</h1>
      <div className="App">
        <Row className="rows" gutter={[16, 16]}>
          {filteredFoods.map((food) => {
            return (
              <FoodBox
                key={food.name + food.calories}
                foods={food}
                deleteFood={deleteFood}
              />
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default App;
