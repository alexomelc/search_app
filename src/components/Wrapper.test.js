import React from 'react'
import Wrapper from './index'
import {shallow} from 'enzyme';


describe('ChartFactory/components/ChartWrapper', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<Wrapper />)
	})
	it('shoud render wrapper with panel', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
