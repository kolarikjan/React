import './ExpenseItem.css';

import ExpanseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpanseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <span className='expense-item__price'>{props.price} $</span>
            </div>
        </Card>
    );
    
}

export default ExpenseItem;