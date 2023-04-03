import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

import './Expenses.css';

function Expenses (props) {

    const expenses = props.data;     

    return (
        <Card className="expenses">
            <ExpenseItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} price={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
            <ExpenseItem title={expenses[2].title} price={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            <ExpenseItem title={expenses[3].title} price={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;