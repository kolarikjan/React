import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.getFullYear()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <span className='expense-item__price'>{props.price} $</span>
            </div>
        </div>
    );
    
}

export default ExpenseItem;