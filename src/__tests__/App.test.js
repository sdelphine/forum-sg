import { mount } from 'enzyme';
import App from '../App';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<App />', () => {
    it('should render home topic route', () => {
        const history = createMemoryHistory()
        history.push('/legal')

        const wrapper = mount(<Router history={history}><App /></Router>)
        const part = wrapper.find('Route')
        expect(part.length).toBe(1)
    })
    it('should render new message topic route', () => {
        const history = createMemoryHistory()
        history.push('/legal/newMessage')

        const wrapper = mount(<Router history={history}><App /></Router>)
        const part = wrapper.find('Route')
        expect(part.length).toBe(1)
    })
});
