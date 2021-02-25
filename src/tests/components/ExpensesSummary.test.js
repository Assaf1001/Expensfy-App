import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary.jsx";

test("Should currenctly render expenses summary with 1 expense", () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={1} expenseTotal={235} />
    );
    expect(wrapper).toMatchSnapshot();
});

test("Should currenctly render expenses summary with multiple expenses", () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={4} expenseTotal={1000} />
    );
    expect(wrapper).toMatchSnapshot();
});
