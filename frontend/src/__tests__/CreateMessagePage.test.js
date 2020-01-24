import React from 'react';
import CreateMessagePage from '../messages/CreateMessagePage';
import CreateMessage from '../messages/CreateMessage';
import { fakeTopic } from '../lib/fakeUtils';
import { mount } from 'enzyme';
import { StoreProvider } from 'easy-peasy';
import { store } from '../store/storeModel';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<CreateMessagePage /> component', () => {
    it('should render CreateMessage component', () => {
        const history = createMemoryHistory()
        history.push(`/`)

        const wrapper = mount(
            <StoreProvider store={store}>
                <Router history={history}>
                    <CreateMessagePage topic={fakeTopic}/>
                </Router>
            </StoreProvider>
        )
        const part = wrapper.find(CreateMessage)
        expect(part).toHaveLength(1)
    })
})