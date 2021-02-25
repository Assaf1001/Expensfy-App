import selectExpensesTotal from "../../selectors/expenses-total.js";
import expenses from "../fixtures/expenses.js";

test("Should return 0 if no expenses", () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test("Should currectly add up a single expense", () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount);
});

test("Should currectly add up multiple expenses", () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});
