import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import Expenseslist from './ExpensesList';

import './Expenses.css';
import ExpensesChart from './ExpensesChart';

import './ExpenseTotal.css';
import ExpenseTotal from './ExpenseTotal';



const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);    
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
        }
    );

    const sortedFilteredExpenses = filteredExpenses.sort((a,b) => b.date > a.date ? -1: 1);

    return (
        <div>
            <li><Card className='expenses'>
            {/* Controlled component */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <Expenseslist expenses={filteredExpenses} />
                <ExpenseTotal expenses={filteredExpenses} />
            </Card>
            </li>
        </div>
    );
}

export default Expenses;