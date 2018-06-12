import React from 'react';
import { shallow } from 'enzyme';
import Select from '../Select'

test('should render the Select component', async () => {
  const wrapper = shallow(
    <Select />
  )

  expect(wrapper.first().hasClass('Select')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})