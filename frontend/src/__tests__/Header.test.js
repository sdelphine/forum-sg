import { render } from 'enzyme';
import Header from '../misc/Header';
import React from 'react';
import { fakeTopic } from '../lib/fakeUtils'


describe('<Header /> component', () => {
    it('should render header title', () => {
        const wrapper = render(<Header topic={fakeTopic}/>)

        const part = wrapper.find('p')
        expect(part.text()).toBe(`Topic: ${fakeTopic}`)
    });
});