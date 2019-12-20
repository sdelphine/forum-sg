import { mount, render } from 'enzyme';
import CreateMessage from '../components/CreateMessage';
import React from 'react';

describe('<CreateMessage /> component', () => {

    it('should render all child elements', () => {
        const wrapper = render(<CreateMessage topic='' />)

        expect(wrapper.children().length).toBe(4)
    });

    it('should display a placeholder for the content', () => {
        const wrapper = render(<CreateMessage topic='' />)

        expect(wrapper.find("textarea#message").attr("placeholder"))
            .toEqual('Write your message')
    });

    it('should invoke creation callback when form is valid and button pressed', () => {
        const onCreateMessage = jest.fn()
        const wrapper = mount(<CreateMessage topic='' onCreateMessage={onCreateMessage} />)

        wrapper.find('select').simulate('change', { target: { value: "user2" } });
        wrapper.find('textarea').simulate('change', { target: { value: 'Bonjour' }});

        wrapper.find('button').simulate('click');

        expect(onCreateMessage).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Bonjour',
            sender: 'user2'
        }))
    });

    describe('should not invoke creation callback when form is invalid and button pressed', () => {
        it('when content is empty', () => {
            const onCreateMessage = jest.fn()
            const wrapper = mount(<CreateMessage topic='' onCreateMessage={onCreateMessage} />)
    
            wrapper.find('select').simulate('change', { target: { value: "user2" } });
    
            wrapper.find('button').simulate('click');
    
            expect(onCreateMessage).not.toHaveBeenCalled()
        });

        it('when posting user is not set', () => {
            const onCreateMessage = jest.fn()
            const wrapper = mount(<CreateMessage topic='' onCreateMessage={onCreateMessage} />)
    
            wrapper.find('textarea').simulate('change', { target: { value: 'blabla' }});

            wrapper.find('button').simulate('click');
    
            expect(onCreateMessage).not.toHaveBeenCalled()
        });
    });
    
});