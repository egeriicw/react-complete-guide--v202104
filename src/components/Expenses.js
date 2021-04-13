import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

    return (
        <div className="expenses">
            {props.expenses.map((item, index) => (
                <ExpenseItem 
                    title={item.title} 
                    amount={item.amount} 
                    date={item.date}
                    key={index} />
            ))};            
        </div>
    );
}

export default Expenses;