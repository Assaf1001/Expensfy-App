import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses.js";

test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1",
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
    const expense = {
        id: "4",
        description: "Computer",
        note: "A brand new MacBook Pro",
        amount: 200000,
        createdAt: 0,
    };
    const action = {
        type: "ADD_EXPENSE",
        expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense", () => {
    const updates = {
        description: "Gummy",
        amount: 200,
    };
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates,
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe("Gummy");
    expect(state[0].amount).toBe(200);
});

test("Should not edit an expense if expense not found", () => {
    const updates = {
        description: "Gummy",
        amount: 200,
    };
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]],
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
