import React from 'react';
import App from '../App';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

Enzyme.configure({ adapter: new Adapter() });

describe('Test App component: ', () => {
	it('SHALLOW Snapshot.', () => {
		const component = shallow(<App />);
		expect(component).toMatchSnapshot();
	});

	it('MOUNT Snapshot.', () => {
		const component = mount(<App />);
		expect(component).toMatchSnapshot();
	});
});