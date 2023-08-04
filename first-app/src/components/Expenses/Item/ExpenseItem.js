import { useState } from 'react';
import './ExpenseItem.css';

import ExpanseDate from './ExpenseDate';
import Card from '../../Card/Card';

function ExpenseItem(props) {

    const [name, setName] = useState(props.title);
    //const [price, setPrice] = useState(props.amount);

    const clickHandler = () => {
        //clearTimeout(reducePriceIfHigh);
        setName("Samsung Galaxy");
    }

    /*const reducePriceIfHigh = setTimeout(() => {
        if (price > 500 && price === props.price) {
            setPrice(price - 50);
            alert(`Product ${name} has been discounted!`);
        }
    }, 5000);*/


    return (
        <li>
            <Card className="expense-item">
                <ExpanseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{name}</h2>
                    <span className='expense-item__price'>{props.amount} $</span>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
    
}

export default ExpenseItem;