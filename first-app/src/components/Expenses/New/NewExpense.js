import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExepnseDataHandler = (expenseData) => {
        const expenseDataExtended = {
            ...expenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseDataExtended);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExepnseDataHandler} />
        </div>
    )
}

export default NewExpense;