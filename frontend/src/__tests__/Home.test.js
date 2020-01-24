import { mount } from 'enzyme';
import Home from '../misc/Home';
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import Nav from '../misc/Nav';
import { StoreProvider } from 'easy-peasy';
import { store } from '../store/storeModel';

describe('<Home /> component', () => {
    it('should render logo', () => {
        const wrapper = mount(
            <StoreProvider store={store}>
                <Router>
                    <Home />
                </Router>
            </StoreProvider>
        )
        const part = wrapper.find('img')
        expect(part).toHaveLength(1)
    });
    it('should render nav components', () => {
        const wrapper = mount(
            <StoreProvider store={store}>
                <Router>
                    <Home />
                </Router>
            </StoreProvider>
        )
        const part = wrapper.find('Nav')
        expect(part).toHaveLength(1)
    });
});