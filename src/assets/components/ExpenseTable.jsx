import React, { useState } from "react";


function ExpenseTable({ expenses, onDelete }) {
    const [sortBy, setSortBy] = useState(null);


    const sortedExpenses = [...expenses].sort((a, b) => {
        if (!sortBy) return 0;
    return a[sortBy].localeCompare(b[sortBy]);
  });

    return (
      <table className="min-w-full border-collapse">
      <thead className="bg-blue-600 text-white">
      <tr>
      <th className="px-4 py-4 text-left">Expense</th>
      <th className="px-4 py-4 text-left"> Description <button onClick={() => setSortBy("description")} 
          className="ml-2 px-3 py-1 text-black bg-gray-200 rounded" >  Sort (A-Z) </button> </th>             
      <th className="px-4 py-4 text-left"> Category <button onClick={() => setSortBy("category")}
          className="ml-2 px-3 py-1 text-black bg-gray-200 rounded" > Sort (A-Z) </button> </th>          
      <th className="px-4 py-4 text-left">Amount</th>
      <th className="px-4 py-4 text-left">Date</th>
      <th className="px-4 py-4 text-left">Action</th>
        </tr>
            </thead>
            <tbody>
                {sortedExpenses.map((exp, index) => (
                    <tr key={index}>
                    <td className="px-4 py-2 border-b">{exp.expense}</td>
            <td className="px-4 py-2 border-b">{exp.description}</td>
            <td className="px-4 py-2 border-b">{exp.category}</td>
            <td className="px-4 py-2 border-b">{exp.amount}</td>
            <td className="px-4 py-2 border-b">{exp.date}</td>
            <td className="px-4 py-2 border-b">
              <button 
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" >
                Delete
              </button>
            </td>
                    </tr>
                ))}

            </tbody>

        </table>
    );
}



export default ExpenseTable;
