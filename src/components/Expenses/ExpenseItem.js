import React, { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    // dumb component or presentational component. stateless component. It's 
    // really what we want to have more of these. We want to chop up our 
    // app into numerous, small components. 
    // Only a few components should management state as stateful components. 
    // Manage state in only a few components and pass around state for use.

    // use array destructuring. 1st is a state value and the 2nd is the update function
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //   setTitle("Updated!");
    //   console.log(title);
    // }

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${parseFloat(props.amount).toFixed(2)}</div>
        </div>
        {/* <button onClick={clickHandler}>Click Title</button> */}
      </Card>
    );
}

export default ExpenseItem;