import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
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
			{expenses.filter(expense => (parseInt(selectedOption)===expense.date.getFullYear())).map((expense) => {
				return (
					<ExpenseItem 
						title={expense.title} 
						amount={expense.amount}
						date={expense.date}
					/>
				)
			})}
		</Card>
	)
}