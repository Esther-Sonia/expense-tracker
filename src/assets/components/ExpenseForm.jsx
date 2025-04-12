import React, { useState } from "react";

function ExpenseForm({ toAddExpense }) {
    const [formData, setFormData] = useState({
        expense: "",
        description: "",
        category: "",
        amount: "",
        date: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.expense && formData.amount) {
          toAddExpense(formData);
          setFormData({
            expense: "",
            description: "",
            category: "",
            amount: "",
            date: "",
          });
        }
      };
      return (
        <div style={{
          border: "2px solid #000000 ",
          borderRadius: "6px",
          padding: "10px",

        }}>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          <input
            name="expense"
            placeholder="Enter expense name"
            value={formData.expense}
            onChange={handleChange}
            required
            style={inputStyle}

          /><br /><br />
          <input
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            required
            style={inputStyle}

          /><br /><br />
          <input
            name="category"
            placeholder="Enter expense category"
            value={formData.category}
            onChange={handleChange}
            required
            style={inputStyle}

          /><br /><br />
          <input
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={inputStyle}

          /><br /><br />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={inputStyle}

          /><br /><br />
         <button type="submit"
         style={{
          backgroundColor: "#338AE7",
          padding: "12px 24px",
          color:"white",
          borderRadius: "6px",
          
        

         }}>Submit</button>
         </form>
         </div>

      );
    }  
    
    const inputStyle = {
      padding: "8px 4px",
      border: "3px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px"
    };
    
   


export default ExpenseForm;



