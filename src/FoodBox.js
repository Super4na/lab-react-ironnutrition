import React, { useState } from "react";
import { Card, Col, Divider, Button } from "antd";

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
          <Button onClick={() => deleteFood(foods.name)} type="primary">
            {" "}
            Delete{" "}
          </Button>
        </Card>
      </Col>
    </>
  );
}

export default FoodBox;
