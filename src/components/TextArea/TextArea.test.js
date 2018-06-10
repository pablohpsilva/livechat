import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '../TextArea'

test('should render the TextArea component', async () => {
  const wrapper = shallow(
    <TextArea />
  )

  expect(wrapper.first().hasClass('TextArea')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})