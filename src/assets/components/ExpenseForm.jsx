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
        <form onSubmit={handleSubmit}>
          <input
            name="expense"
            placeholder="Enter expense name"
            value={formData.expense}
            onChange={handleChange}
            required
          /><br /><br />
          <input
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            required
          /><br /><br />
          <input
            name="category"
            placeholder="Enter expense category"
            value={formData.category}
            onChange={handleChange}
            required
          /><br /><br />
          <input
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
          /><br /><br />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          /><br /><br />
         <button type="submit">Submit</button>
         </form>
      );
    }    


export default ExpenseForm;



