import { render } from 'enzyme';
import Message from '../components/Message';
import React from 'react';
import { fakeMessage } from '../lib/fakeUtils'

describe('<Message /> component', () => {
    it('should render information about creator', () => {
        const wrapper = render(<Message message={fakeMessage} />)

        const part = wrapper.find('.message-from')
        expect(part.text()).toBe(`From ${fakeMessage.from}`)
    })
    it('should render information about creation date', () => {
        const wrapper = render(<Message message={fakeMessage} />)

        const part = wrapper.find('.message-at')
        expect(part.text()).toBe(`At ${fakeMessage.at}`)
    })
    it('should render information about message content', () => {
        const wrapper = render(<Message message={fakeMessage} />)

        const part = wrapper.find('.message')
        expect(part.text()).toBe(fakeMessage.message)
    })
})
