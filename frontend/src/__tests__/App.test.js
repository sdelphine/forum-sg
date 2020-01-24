import { mount } from 'enzyme';
import App from '../App';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fakeTopic } from '../lib/fakeUtils';
import { StoreProvider } from 'easy-peasy';
import { store } from '../store/storeModel';

describe('<App />', () => {
    it('should render home route', () => {
        const history = createMemoryHistory()
        history.push("/")

        const wrapper = mount(
            <StoreProvider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </StoreProvider>
        )
        const part = wrapper.find('Route')
        expect(part.length).toBe(1)
    });
    it('should render topic route', () => {
        const history = createMemoryHistory()
        history.push(`/${fakeTopic}`)

        const wrapper = mount(
            <StoreProvider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </StoreProvider>
        )
        const part = wrapper.find('Route')
        expect(part.length).toBe(1)
    });
    it('should render new message topic route', () => {
        const history = createMemoryHistory()
        history.push(`/${fakeTopic}/newMessage`)

        const wrapper = mount(
            <StoreProvider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </StoreProvider>
        )
        const part = wrapper.find('Route')
        expect(part.length).toBe(1)
    });
});