import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message'

test('should render the Message component', async () => {
  const wrapper = shallow(
    <Message />
  )

  expect(wrapper.first().hasClass('Message')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})