import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header.jsx";

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find("h1").text()).toBe("Expensify");
});

// import React from "react";
// import Header from "../../components/Header.jsx";
// import ReactSahllowRenderer from "react-test-renderer/shallow";

// test("Should render Header correctly", () => {
//     const renderer = new ReactSahllowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
