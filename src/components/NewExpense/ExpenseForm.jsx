import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [enteredDate, setEnteredDate] = useState("");
	const [newForm, enabledForm] = useState(false);

	const enableNewForm = () => {
		enabledForm(!newForm);
	}

	const [userInput, setUserInput] = useState({
		enteredTitle:"",
		enteredAmount:"",
		enteredDate: ""
	});

	const titleChangeHandler = (event) => {
		// setEnteredTitle(event.target.value);
		setUserInput({
			...userInput,
			enteredTitle: event.target.value
		})
		// setUserInput((prevState) => {
		// 	return {...prevState, enteredTitle: event.target.value };
		// });
		// Esta alternativa funciona cuando dependemos del state anterior
	};
	
	const amountChangeHandler = (event) => {
		// setEnteredAmount(event.target.value);
		setUserInput({
			...userInput,
			enteredAmount: event.target.value
		})
	};

	const dateChangeHandler = (event) => {
		// setEnteredDate(event.target.value);
		setUserInput({
			...userInput,
			enteredDate: event.target.value
		})
	};

	// const inputChangeHandler = (identifier, value) => {
	//	if (identifier === "title") {
	//		setEnteredTitle(value);
	//	} else if (identifier === "date") {
	//		setEnteredDate(value);
	// 	} else {
	//		setEnteredAmount(value);
	// 	}
	// }; Otra alternativa para hacer una sola arrow function que funcione en los tres botones

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: userInput.enteredTitle,
			amount: userInput.enteredAmount,
			date: new Date(userInput.enteredDate)
		}

		props.onSaveExpenseData(expenseData);
		setUserInput({enteredTitle: "", enteredAmount: "", enteredDate: ""});
		enabledForm(!newForm);
	};
	return (
		newForm ? <form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
					</div>
					<div className="new-expense__actions">
						<button type="submit">Add Expense</button>
					</div>
				</div>
			</form>
		: <button onClick={enableNewForm}>Add New Expense</button>
	)
};

export default ExpenseForm