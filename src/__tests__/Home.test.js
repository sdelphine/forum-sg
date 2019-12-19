import { shallow, mount, render } from 'enzyme';
import Home from '../components/Home';
import React from 'react';
import { MemoryRouter as Router, Link } from 'react-router';
import toJSON from 'enzyme-to-json';

const wrapper = mount(
    <Router>
        <Home />
    </Router>
)

describe('<Home />', () => {
    it('render all home components', () => {
        const part = wrapper.find('.home')
        expect(part.children()).toHaveLength(3)
    });
    
    it('render header component', () => {
        const part = wrapper.find('Header')
        expect(toJSON(part)).toMatchSnapshot()
    });

    it('render message component', () => {
        const part = wrapper.find('MessageList')
        expect(toJSON(part)).toMatchSnapshot()
    })

    it('includes link to add message page', () => {                                       
        const part = wrapper.find('Link')
        expect(part.props().to).toBe('/newMessage');
    });
});