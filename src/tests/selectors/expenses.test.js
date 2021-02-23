import selectExpense from "../../selectors/expenses.js";
import moment from "moment";

import expenses from "../fixtures/expenses.js";

test("Sould filter by text value", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    };
    const res = selectExpense(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[1]]);
});

test("Should filter by startDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined,
    };
    const res = selectExpense(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[0]]);
});

test("Should filter by endDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0).add(1, "days"),
    };
    const res = selectExpense(expenses, filters);
    expect(res).toEqual([expenses[0], expenses[1]]);
});

test("Should sort by date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    };
    const res = selectExpense(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Should sort by amount", () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    };
    const res = selectExpense(expenses, filters);
    expect(res).toEqual([expenses[1], expenses[2], expenses[0]]);
});
