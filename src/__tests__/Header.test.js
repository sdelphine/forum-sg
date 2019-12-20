import { render } from 'enzyme';
import Header from '../components/Header';
import React from 'react';
import { fakeTopic } from '../lib/fakeUtils'


describe('<Header /> component', () => {
    it('should render header title', () => {
        const wrapper = render(<Header topic={fakeTopic}/>)

        const part = wrapper.find('h1')
        expect(part.text()).toBe(`Topic: ${fakeTopic}`)
    });
});