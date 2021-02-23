import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage.jsx";

test("Should render NotFoundPage", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
