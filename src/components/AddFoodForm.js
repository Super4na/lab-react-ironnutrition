import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };
  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    addFood(newFood);
    setName("");
    setCalories("");
    setServings("");
    setImage("");
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  if (showForm) {
    return (
      <>
        <Button id="addHide" onClick={toggleShowForm}>
          {showForm ? "Hide Form" : "Add New Food"}
        </Button>
        <Divider>Add Food Entry</Divider>
        <div class="form">
          {" "}
          <form onSubmit={handleFormSubmit}>
            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} />

            <label>Image</label>
            <Input value={image} type="text" onChange={handleImageInput} />

            <label>Calories</label>
            <Input
              value={calories}
              type="text"
              onChange={handleCaloriesInput}
            />

            <label>Servings</label>
            <Input
              value={servings}
              type="text"
              onChange={handleServingsInput}
            />

            <button id="create" type="submit">
              Create
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <Button id="addHide" onClick={toggleShowForm}>
        {showForm ? "Hide Form" : "Add New Food"}
      </Button>
    </>
  );
}

export default AddFoodForm;
