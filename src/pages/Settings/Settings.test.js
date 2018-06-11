import React from 'react';
import { shallow } from 'enzyme';
import Settings from '../Settings'

test('should render the Settings component', async () => {
  const wrapper = shallow(
    <Settings />
  )

  expect(wrapper.first().hasClass('Settings')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})