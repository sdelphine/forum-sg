import { thunk, action } from 'easy-peasy';
import MessagesService from './MessagesService';

export const messagesModel = {
    messages: {
        // Data Structure
        data: [],
        // Actions
        // Get message by topic ID
        getByTopicId: thunk(async (actions, topicId) => {
            const service = new MessagesService()
            const data = await service.getMessagesByTopicId(topicId)
            actions.setData(data)
        }),
        setData: action((state, payload) => {
            state.data = payload
        }),
        // Add a message
        addToTopic: thunk(async (actions, topicId, message) => {
            const service = new MessagesService()
            const data = await service.pushNewMessage(message)
            actions.add({topicId, data})
        }),
        add: action((state, {topicId, payload}) => {
            state.data[topicId].push(payload);
        }),
    }
}
