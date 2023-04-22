import './ExpenseItem.css';

import ExpanseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpanseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <span className='expense-item__price'>{props.price} $</span>
            </div>
        </div>
    );
    
}

export default ExpenseItem;