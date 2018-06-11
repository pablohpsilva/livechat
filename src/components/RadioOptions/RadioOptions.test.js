import React from 'react';
import { shallow } from 'enzyme';
import RadioOptions from '../RadioOptions'

test('should render the RadioOptions component', async () => {
  const wrapper = shallow(
    <RadioOptions />
  )

  expect(wrapper.first().hasClass('RadioOptions')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})