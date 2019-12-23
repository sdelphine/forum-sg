import { mount } from 'enzyme';
import Home from '../components/Home';
import React from 'react';
import { MemoryRouter as Router } from 'react-router';

describe('<Home /> component', () => {
    it('should render all home components', () => {
        const wrapper = mount(
            <Router>
                <Home />
            </Router>
        )
        const part = wrapper.find('Nav')
        expect(part).toHaveLength(1)
    });
});