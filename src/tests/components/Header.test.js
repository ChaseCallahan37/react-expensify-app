import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

test("Should render the header component", () => {
  const wrapper = shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
