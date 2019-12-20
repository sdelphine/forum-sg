import { mount } from 'enzyme';
import Home from '../components/Home';
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { fakeTopic, fakeMessageList } from '../lib/fakeUtils'

describe('<Home /> component', () => {
    it('should render all home components', () => {
        const wrapper = mount(
            <Router>
                <Home topic={fakeTopic} messageList={fakeMessageList} />
            </Router>
        )
        const part = wrapper.find('.home')
        expect(part.children()).toHaveLength(3)
    });

    it('should render header component', () => {
        const wrapper = mount(
            <Router>
                <Home topic={fakeTopic} messageList={fakeMessageList} />
            </Router>
        )

        expect(wrapper.find('Header')).toHaveLength(1)
    });

    it('render message component', () => {
        const wrapper = mount(
            <Router>
                <Home topic={fakeTopic} messageList={fakeMessageList} />
            </Router>
        )

        expect(wrapper.find('MessageList')).toHaveLength(1)
    })

    it('includes link to add message page', () => {
        const wrapper = mount(
            <Router>
                <Home topic={fakeTopic} messageList={fakeMessageList} />
            </Router>
        )

        const part = wrapper.find('Link')
        const to = `/${fakeTopic}/newMessage`
        expect(part.props().to).toBe(to);
    });
});