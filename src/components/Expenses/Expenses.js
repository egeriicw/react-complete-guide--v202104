import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

    return (
        <Card className="expenses">
            {props.expenses.map((item, index) => (
                <ExpenseItem 
                    title={item.title} 
                    amount={item.amount} 
                    date={item.date}
                    key={index} />
            ))};            
        </Card>
    );
}

export default Expenses;