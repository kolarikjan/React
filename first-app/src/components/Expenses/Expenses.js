import { useState } from "react";

import Card from "../Card/Card";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

import './Expenses.css';

function Expenses (props) {

    const [filteredYear, setfilteredYear] = useState("2020");

    const data = props.data;
    
    const filteredData = data.filter(item => item.date.getFullYear().toString() === filteredYear);

    const allYearsOptions = ["2019","2020","2021","2022"];
    let hiddenYears = allYearsOptions.filter(item => item !== filteredYear);
    hiddenYears = hiddenYears.map((item) => `${item}`).join(', ');

    const yearSelectHandler = selectedYear => {
        setfilteredYear(selectedYear);
    }
    return (
        <div className="expenses">
            <ExpensesFilter year={filteredYear} onYearSelect={yearSelectHandler}/>
            <p>Data for years {hiddenYears} are hidden.</p>
            <Card>
                <ExpensesList data={filteredData}/>
            </Card>
        </div>
    );
}

export default Expenses;