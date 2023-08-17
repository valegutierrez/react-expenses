import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css"

export default function Expenses({expenses}) {
	const options = [2022, 2021, 2020, 2019];
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const filteredExpenses = expenses.filter(expense => (parseInt(selectedOption)===expense.date.getFullYear()));

	return (
		<Card className="expenses">
			<ExpensesFilter 
				selectedOption={selectedOption} 
				setSelectedOption={setSelectedOption} 
				options={options}
			/>
			<ExpensesChart 
				expenses={filteredExpenses} 
			/>
			<ExpensesList 
				expenses={filteredExpenses} 
				selectedOption={selectedOption} 
			/>
		</Card>
	)
}