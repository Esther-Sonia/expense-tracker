import React, { useState } from 'react'; 
import ExpenseForm from "./assets/components/ExpenseForm";
import ExpenseTable from "./assets/components/ExpenseTable";
import SearchBar from "./assets/components/Searchbar";


function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.expense.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div style={{ display: "flex", padding: "20px", fontFamily: "Arial" }}>
        <div style={{ width: "25%", marginRight: "20px" }}>
  <h2>Add Expense</h2>
    <ExpenseForm toAddExpense={addExpense} />
  </div>

  <div style={{ width: "75%" }}>
  <h1>Expense Tracker</h1>
  <SearchBar setSearchTerm={setSearchTerm} />
  <ExpenseTable expenses={filteredExpenses} />
</div>
</div>

  );
}

export default App;


