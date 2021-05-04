import React from 'react';

import './ExpenseTotal.css';

const ExpenseTotal = props => {
    
    const totalExpensesValues = props.expenses.map(expense => expense.amount);
    const totalExpenses = [...totalExpensesValues].reduce((a,b) => a+b, 0);

    return (
        <div className='expenses-total'>
            <div className='expenses-total__control'>
                <label>Total Expenses</label>
                <div>${parseFloat(totalExpenses).toFixed(2)}</div>
            </div>
        </div>
    );

};

export default ExpenseTotal;