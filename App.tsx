import ExpenseList from "./Expense-tracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import categories from "./Expense-tracker/categories";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 100,
      category: "Food",
    },
    {
      id: 2,
      description: "Car wash",
      amount: 25,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Cell phone",
      amount: 60,
      category: "Utilities",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
