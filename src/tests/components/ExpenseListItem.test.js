import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses.js";

import ExpenseListItem from "../../components/ExpenseListItem.jsx";

test("Should render ExpenseListItem with expense", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
