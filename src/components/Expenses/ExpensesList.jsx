import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.expenses.filter(expense => (parseInt(props.selectedOption)===expense.date.getFullYear()));  
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expensess.</h2>
  }

  return <ul className="expenses-list">
    {filteredExpenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
}

export default ExpensesList;