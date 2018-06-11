import React from 'react';
import { shallow } from 'enzyme';
import ChatList from '../ChatList'

test('should render the ChatList component', async () => {
  const wrapper = shallow(
    <ChatList />
  )

  expect(wrapper.first().hasClass('ChatList')).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})