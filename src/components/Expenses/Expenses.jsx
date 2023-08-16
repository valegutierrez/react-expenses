import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css"

export default function Expenses({expenses}) {
	const options = [2022, 2021, 2020, 2019];
	const [selectedOption, setSelectedOption] = useState(options[0]);

	return (
		<Card className="expenses">
			<ExpensesFilter 
				selectedOption={selectedOption} 
				setSelectedOption={setSelectedOption} 
				options={options}
			/>
			<h2>Let's get started!</h2>
			<ExpensesList 
				expenses={expenses} 
				selectedOption={selectedOption} 
			/>
		</Card>
	)
}