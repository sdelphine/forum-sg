import { mount, render } from 'enzyme';
import CreateMessage from '../messages/CreateMessage';
import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { store } from '../store/storeModel';
import { fakeTopic } from '../lib/fakeUtils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';


describe('<CreateMessage /> component', () => {

    it('should render all child elements', () => {
        const history = createMemoryHistory()
        history.push(`/${fakeTopic}/newMessage`)

        const wrapper = render(
            <StoreProvider store={store}>
                <Router history={history}>
                    <CreateMessage topic={fakeTopic} />
                </Router>
            </StoreProvider>
        )

        expect(wrapper.children().length).toBe(3)
    });

    it('should display a placeholder for the content', () => {
        const history = createMemoryHistory()
        history.push(`/${fakeTopic}/newMessage`)

        const wrapper = render(
            <StoreProvider store={store}>
                <Router history={history}>
                    <CreateMessage topic={fakeTopic} />
                </Router>
            </StoreProvider>
        )

        expect(wrapper.find("textarea#message").attr("placeholder"))
            .toEqual('Write your message')
    });

    it('should invoke creation callback when form is valid and button pressed', () => {
        const onCreateMessage = jest.fn()
        const history = createMemoryHistory()
        history.push(`/${fakeTopic}/newMessage`)

        const wrapper = mount(
            <StoreProvider store={store}>
                <Router history={history}>
                    <CreateMessage topic={fakeTopic} onCreateMessage={onCreateMessage} />
                </Router>
            </StoreProvider>
        )

        wrapper.find('select').simulate('change', { target: { value: 'user2' } });
        wrapper.find('textarea').simulate('change', { target: { value: 'Bonjour' } });

        wrapper.find('button').simulate('click');

        expect(onCreateMessage).toHaveBeenCalledWith(expect.objectContaining({
            message: 'Bonjour',
            creator: 'user2',
            topicId: undefined,
        }))
    });

    describe('should not invoke creation callback when form is invalid and button pressed', () => {
        it('when content is empty', () => {
            const onCreateMessage = jest.fn()
            const history = createMemoryHistory()
            history.push(`/${fakeTopic}/newMessage`)

            const wrapper = mount(
                <StoreProvider store={store}>
                    <Router history={history}>
                        <CreateMessage topic={fakeTopic} onCreateMessage={onCreateMessage} />
                    </Router>
                </StoreProvider>
            )

            wrapper.find('select').simulate('change', { target: { value: "user2" } });

            wrapper.find('button').simulate('click');

            expect(onCreateMessage).not.toHaveBeenCalled()
        });

        it('when posting user is not set', () => {
            const onCreateMessage = jest.fn()
            const history = createMemoryHistory()
            history.push(`/${fakeTopic}/newMessage`)

            const wrapper = mount(
                <StoreProvider store={store}>
                    <Router history={history}>
                        <CreateMessage topic={fakeTopic} onCreateMessage={onCreateMessage} />
                    </Router>
                </StoreProvider>
            )

            wrapper.find('textarea').simulate('change', { target: { value: 'blabla' } });

            wrapper.find('button').simulate('click');

            expect(onCreateMessage).not.toHaveBeenCalled()
        });
    });

});