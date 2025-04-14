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
  const deleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };


  return(
    <div className="flex flex-col md:flex-row p-4 font-sans items-start gap-6">
      <div className="w-full md:w-1/5 bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
      <ExpenseForm toAddExpense={addExpense} />
  </div>

  <div className="w-full md:w-3/5 bg-white shadow-md p-4 rounded-lg">
  <h1 className="text-xl font-bold mb-4">Expense Tracker</h1>
  <SearchBar setSearchTerm={setSearchTerm} />
  <ExpenseTable expenses={filteredExpenses}  onDelete={deleteExpense} />
</div>
</div>

  );
}

export default App;


