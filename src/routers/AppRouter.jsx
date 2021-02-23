import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header.jsx";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.jsx";
import AddExpensePage from "../components/AddExpensePage.jsx";
import EditExpensePage from "../components/EditExpensePage.jsx";
import HelpPage from "../components/HelpPage.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
