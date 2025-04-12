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
    <div style={{ display: "flex", padding: "15px", fontFamily: "Arial",  alignItems: "flex-start" }}>
        <div style={{ width: "15%", padding: "10px" }}>
        <h2 style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}>Add Expense</h2>
    <ExpenseForm toAddExpense={addExpense} />
  </div>

  <div style={{ width: "55%",padding:"10px" }}>
  <h1 style={{ margin: "0 0 10px 0", fontSize: "1.5rem" }}>Expense Tracker</h1>
  <SearchBar setSearchTerm={setSearchTerm} />
  <ExpenseTable expenses={filteredExpenses} />
</div>
</div>

  );
}

export default App;


