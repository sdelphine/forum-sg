import { mount } from 'enzyme';
import Topic from '../topics/Topic';
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { fakeTopic } from '../lib/fakeUtils'

import { StoreProvider } from 'easy-peasy';
import { store } from '../store/storeModel';

describe('<Topic /> component', () => {
    it('should render all Topic components', () => {
        const wrapper = mount(
            <StoreProvider store={store}>
                <Router>
                    <Topic topic={fakeTopic}  />
                </Router>
            </StoreProvider>
        )
        const part = wrapper.find('.topic')
        expect(part.children()).toHaveLength(4)
    });

    it('should render header component', () => {
        const wrapper = mount(
            <StoreProvider store={store}>
                <Router>
                    <Topic topic={fakeTopic}  />
                </Router>
            </StoreProvider>
        )

        expect(wrapper.find('Header')).toHaveLength(1)
    });

    it('render message component', () => {
        const wrapper = mount(
            <StoreProvider store={store}>
                <Router>
                    <Topic topic={fakeTopic}  />
                </Router>
            </StoreProvider>
        )

        expect(wrapper.find('MessageList')).toHaveLength(1)
    });

    it('includes link to add message page', () => {
        const wrapper = mount(
            <StoreProvider store={store}>
                <Router>
                    <Topic topic={fakeTopic}  />
                </Router>
            </StoreProvider>
        )

        const part = wrapper.find('Link.messageLink')
        const to = `/${fakeTopic}/newMessage`
        expect(part.props().to).toBe(to);
    });
});
