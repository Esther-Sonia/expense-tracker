import React, { useState } from "react";


function ExpenseTable({ expenses, onDelete }) {
    const [sortBy, setSortBy] = useState(null);


    const sortedExpenses = [...expenses].sort((a, b) => {
        if (!sortBy) return 0;
    return a[sortBy].localeCompare(b[sortBy]);
  });

  const sortButtonStyle = {
    marginLeft: "8px",
    padding: "4px 8px",
    fontSize: "12px",
    backgroundColor: "#f0f0f0",
  };

    return (
        <table style={{ width: "100%", minWidth: "800px", borderCollapse: "collapse" }}> 
            <thead style={{ background: "#338AE7	", color: "#fff" }}>
              <tr>
            <th style={thStyle} onClick={() => setSortBy('expense')} >Expense</th>
            <th style={thStyle}> Description <button onClick={() => setSortBy('description')}style={sortButtonStyle} > Sort (A-Z)</button> </th>
            <th style={thStyle}> Category <button onClick={() => setSortBy('category')}style={sortButtonStyle} > Sort (A-Z)</button> </th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Action</th> 
            </tr>
            </thead>
            <tbody>
                {sortedExpenses.map((exp, index) => 
                    <tr key={index}>
                    <td style={tdStyle}>{exp.expense}</td>
                    <td style={tdStyle}>{exp.description}</td>
                    <td style={tdStyle}>{exp.category}</td>
                    <td style={tdStyle}>{exp.amount}</td>
                    <td style={tdStyle}>{exp.date}</td>
                    <td style={tdStyle}>
              <button 
                onClick={() => onDelete(index)}
                style={{ 
                  background: "#ff4444", 
                  color: "white", 
                  border: "none",
                  padding: "10px",
                  borderRadius: "6px"
                }}
              >
                Delete
              </button>
            </td>
                    </tr>
                )}

            </tbody>

        </table>
    );
}

const thStyle = {
  padding: "17px",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  textAlign: "left",
  cursor: "pointer",

};



export default ExpenseTable;
