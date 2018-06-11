import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../Toolbar'

test('should render the Toolbar component', async () => {
  const wrapper = shallow(
    <Toolbar />
  )

  expect(wrapper.first().hasClass('Toolbar')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})