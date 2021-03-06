import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter.jsx";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses.js";
import "normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase.js";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>LOADING...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("root"));
});
