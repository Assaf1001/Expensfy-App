import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
} from "../../actions/expenses.js";
import expenses from "../fixtures/expenses.js";
import database from "../../firebase/firebase.js";

const createMockStore = configureMockStore([thunk]);

test("Should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc",
    });
});

test("Should setup edit expense action object", () => {
    const action = editExpense("1234abcd", { note: "New note" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "1234abcd",
        updates: { note: "New note" },
    });
});

test("Should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2],
    });
});

test("Should add expesne to database and store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "This one is better",
        createdAt: 1000,
    };

    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expense: {
                    id: expect.any(String),
                    ...expenseData,
                },
            });

            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test("Should add expesne with defaults to database and store", (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0,
    };

    store
        .dispatch(startAddExpense())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults,
                },
            });

            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once("value");
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
});

// test("Should setup add expense action object with default values", () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0,
//         },
//     });
// });
