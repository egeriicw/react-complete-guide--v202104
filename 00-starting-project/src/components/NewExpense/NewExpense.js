import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditHandler = () => {
        setIsEditing(true);
    };

    const stopEditHandler = () => {
        setIsEditing(false);
    };
    
    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditHandler}>Add New Expense</button>
            )}
            {/* how to transfer data from a child to parent */}
            {isEditing && (
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditHandler} 
                />
            )}
        </div>
    )
};

export default NewExpense;