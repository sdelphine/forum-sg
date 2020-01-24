import { shallow } from 'enzyme';
import Message from '../messages/Message';
import React from 'react';
import { fakeMessage } from '../lib/fakeUtils'

describe('<Message /> component', () => {
    it('should render information about creator', () => {
        const wrapper = shallow(<Message message={fakeMessage} />)

        const part = wrapper.find('.message-from')
        expect(part.text()).toBe(`From ${fakeMessage.creator}`)
    })
    it('should render information about creation date', () => {
        const wrapper = shallow(<Message message={fakeMessage} />)

        const part = wrapper.find('.message-at')
        expect(part.text()).toBe(`At ${fakeMessage.createdAt}`)
    })
    it('should render information about message content', () => {
        const wrapper = shallow(<Message message={fakeMessage} />)

        const part = wrapper.find('.message')
        expect(part.text()).toBe(fakeMessage.message)
    })
})
