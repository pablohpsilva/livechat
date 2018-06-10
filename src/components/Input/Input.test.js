import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input'

test('should render the Input component', async () => {
  const wrapper = shallow(
    <Input />
  )

  expect(wrapper.first().hasClass('Input')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})