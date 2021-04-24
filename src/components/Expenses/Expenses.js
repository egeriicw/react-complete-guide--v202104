import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import Expenseslist from './ExpensesList';

import './Expenses.css';



const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);    
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
        }
    );


    return (
        <div>
            <li><Card className="expenses">
            {/* Controlled component */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <Expenseslist items={filteredExpenses} />          
            </Card>
            </li>
        </div>
    );
}

export default Expenses;