import { mount } from 'enzyme';
import Topic from '../components/Topic';
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { fakeTopic } from '../lib/fakeUtils'

describe('<Topic /> component', () => {
    it('should render all Topic components', () => {
        const wrapper = mount(
            <Router>
                <Topic topic={fakeTopic}  />
            </Router>
        )
        const part = wrapper.find('.topic')
        expect(part.children()).toHaveLength(4)
    });

    it('should render header component', () => {
        const wrapper = mount(
            <Router>
                <Topic topic={fakeTopic}  />
            </Router>
        )

        expect(wrapper.find('Header')).toHaveLength(1)
    });

    it('render message component', () => {
        const wrapper = mount(
            <Router>
                <Topic topic={fakeTopic}  />
            </Router>
        )

        expect(wrapper.find('MessageList')).toHaveLength(1)
    })

    it('includes link to add message page', () => {
        const wrapper = mount(
            <Router>
                <Topic topic={fakeTopic}  />
            </Router>
        )

        const part = wrapper.find('Link.messageLink')
        const to = `/${fakeTopic}/newMessage`
        expect(part.props().to).toBe(to);
    });
});
