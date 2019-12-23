import { shallow } from 'enzyme';
import MessageList from '../components/MessageList';
import React from 'react';
import { fakeMessageList } from '../lib/fakeUtils'


describe('<MessageList /> component', () => {
    it('should render all messages', () => {
        const wrapper = shallow(<MessageList messageList={fakeMessageList}/>)

        const part = wrapper.find('Message')
        expect(part.length).toBe(4)
    });
});

