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
        <div className="border-2 border-black rounded-md p-4 shadow-md">

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
            className={inputClasses}

          /><br /><br />
          <input
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            required
            className={inputClasses}

          /><br /><br />
          <input
            name="category"
            placeholder="Enter expense category"
            value={formData.category}
            onChange={handleChange}
            required
            className={inputClasses}

          /><br /><br />
          <input
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className={inputClasses}

          /><br /><br />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className={inputClasses}

          /><br /><br />
       <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Submit
        </button>
         </form>
         </div>

      );
    }  
    
    const inputClasses =
  "px-3 py-2 border-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";


export default ExpenseForm;



