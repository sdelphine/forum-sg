import { createStore } from 'easy-peasy';
import { topicsModel } from '../topics/TopicsStoreModel';
import { messagesModel } from '../messages/MessagesStoreModel';

export const store = createStore({
    topicsModel: topicsModel,
    messagesModel: messagesModel,
})

