import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        
    }

    return (
        <div>
            {/* Controlled component */}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <Card className="expenses">
            {props.expenses.map((item, index) => (
                <ExpenseItem 
                    title={item.title} 
                    amount={item.amount} 
                    date={item.date}
                    key={index} />
            ))};            
            </Card>
        </div>
    );
}

export default Expenses;