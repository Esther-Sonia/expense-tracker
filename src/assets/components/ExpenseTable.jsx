import React from "react";

function ExpenseTable({ expenses }) {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }}> 
            <thead style={{ background: "#338AE7	", color: "#fff" }}>
              <tr>
            <th style={thStyle}>Expense</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Date</th>
            </tr>
            </thead>
            <tbody>
                {expenses.map((exp, index) => 
                    <tr key={index}>
                    <td style={tdStyle}>{exp.expense}</td>
                    <td style={tdStyle}>{exp.description}</td>
                    <td style={tdStyle}>{exp.category}</td>
                    <td style={tdStyle}>{exp.amount}</td>
                    <td style={tdStyle}>{exp.date}</td>
                    </tr>
                )}

            </tbody>

        </table>
    );
}

const thStyle = {
  padding: "10px",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  textAlign: "left",
};



export default ExpenseTable;
