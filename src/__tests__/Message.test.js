import { shallow } from 'enzyme';
import Message from '../components/Message';
import React from 'react';

const fakeMessage = {
    id: '1',
    topic: 'legal',
    message: 'First message',
    from: 'Toto',
    at: 'Today at 2:00 PM'
}

const wrapper = shallow(<Message message={fakeMessage} />)
describe('<Message />', () => {
    it('renders information about from', () => {
        const part = wrapper.find('.message-from')
        expect(part.text()).toBe(`From ${fakeMessage.from}`)
    })
    it('renders information about at', () => {
        const part = wrapper.find('.message-at')
        expect(part.text()).toBe(`At ${fakeMessage.at}`)
    })
    it('renders information about message', () => {
        const part = wrapper.find('.message')
        expect(part.text()).toBe(fakeMessage.message)
    })
})
