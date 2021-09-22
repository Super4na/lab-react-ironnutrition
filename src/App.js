import logo from "./logo.svg";
import "./App.css";
import foodsJSON from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [filteredFoods, setFilteredFoods] = useState(foodsJSON);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const deleteFood = (name) => {
    setFoods(foods.filter((food) => food.name !== name));
  };

  const searchFilter = (text) => {
    setFilteredFoods(
      foods.filter((food) => {
        return food.name.includes(text);
      })
    );
  };

  return (
    <>
      <AddFoodForm addFood={addFood} />
      <Search searchFilter={searchFilter} />
      <h1 id="title">Food List</h1>
      <div className="App">
        <Row class="rows" gutter={[16, 16]}>
          {filteredFoods.map((food) => {
            return <FoodBox foods={food} deleteFood={deleteFood} />;
          })}
        </Row>
      </div>
    </>
  );
}

export default App;
