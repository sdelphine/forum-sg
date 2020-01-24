import { thunk, action } from 'easy-peasy';
import MessagesService from './MessagesService';

const service = new MessagesService()

export const messagesModel = {
    messages: {
        // Data Structure
        data: [],
        // Actions
        // Get message by topic ID
        getByTopicId: thunk(async (actions, topicId) => {
            const data = await service.getMessagesByTopicId(topicId)
            actions.setData(data)
        }),
        getByTopicSlug: thunk(async (actions, topicSlug) => {
            const data = await service.getMessagesByTopicSlug(topicSlug)
            actions.setData(data)
        }),
        setData: action((state, payload) => {
            state.data = payload
        }),
        // Add a message
        addToTopic: thunk(async (actions, {creator, topicId, message}) => {
            const data = await service.pushNewMessage({
                message: message,
                creator: creator, topicId: topicId})
            actions.add({topicId, data})
        }),
        add: action((state, {data}) => {
            state.data.push(data);
        }),
    }
}
