import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Set useState method on expense item title to set the value itself (title) and the updatiing function (setTitle)
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // Set clickHandler function to call the updating function (setTitle) whenever the state changes
  const clickHandler = () => {
    setTitle("Updated!!!!");
    console.log(title);
  };

  // Return expenseItem JSX
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
