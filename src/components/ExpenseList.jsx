import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem.jsx";
import selectExpenses from "../selectors/expenses.js";

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))
        )}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
