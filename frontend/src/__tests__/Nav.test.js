import { mount } from 'enzyme';
import Nav from '../misc/Nav';
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { fakeTopicList } from '../lib/fakeUtils';

describe('<Nav /> component', () => {
    it('should render all Nav components', () => {
        const wrapper = mount(
            <Router>
                <Nav topicsList={fakeTopicList}/>
            </Router>
        )
        const part = wrapper.find('Link')
        expect(part.children()).toHaveLength(3)
    });
});