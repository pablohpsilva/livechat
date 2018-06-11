import React from 'react';
import { shallow } from 'enzyme';
import Chat from '../Chat'

test('should render the Chat component', async () => {
  const wrapper = shallow(
    <Chat />
  )

  expect(wrapper.first().hasClass('Chat')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})