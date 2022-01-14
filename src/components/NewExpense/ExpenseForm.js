import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Using multiple states in the same component to store user input:
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Using 1 state by passing in an object as a value:
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // Using multiple states in the same component to store user input:
    setEnteredTitle(event.target.value);

    // Using 1 state by passing in an object as a value:
    // setUserInput({
    // Use spread operator(...) to store other key:value pairs (amount & date) as part of the new state
    // (wrong as depends on the previous state to update the current state)
    // ...userInput,
    // enteredTitle: event.target.value,
    // Instead, call the state updating function (setUserInput) and pass a function into that function:
    // (Use this function syntax if the state update depends on the previous state)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // Using multiple states in the same component to store user input:
    setEnteredAmount(event.target.value);

    // Using 1 state by passing in an object as a value:
    // setUserInput({
    // Use spread operator(...) to store other key:value pairs (title & date) as part of the new state
    // (wrong as depends on the previous state to update the current state)
    // ...userInput,
    // enteredAmount: event.target.value,
    // Instead, call the state updating function (setUserInput and pass a function into that function:
    // (Use this function syntax if the state update depends on the previous state)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // Using multiple states in the same component to store user input:
    setEnteredDate(event.target.value);

    // Using 1 state by passing in an object as a value:
    // setUserInput({
    // Use spread operator(...) to store other key:value pairs (title & amount) as part of the new state
    // (wrong as depends on the previous state to update the current state)
    // ...userInput,
    // enteredDate: event.target.value,
    // Instead, call the state updating function (setUserInput and pass a function into that function:
    // (Use this function syntax if the state update depends on the previous state)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2029-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
