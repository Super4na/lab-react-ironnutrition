import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ foods, deleteFood }) {
  return (
    <>
      <Col span={8}>
        <Card
          title={foods.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={foods.image} height={60} alt={foods.name} />
          <p>Calories: {foods.calories}</p>
          <p>Servings: {foods.servings}</p>
          <p>
            <b>Total Calories: {foods.calories * foods.servings} </b> kcal
          </p>
          <Button type="primary" onClick={() => deleteFood(foods.name)}>
            Delete
          </Button>
        </Card>
      </Col>
    </>
  );
}

export default FoodBox;
