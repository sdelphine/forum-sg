import { thunk, action } from 'easy-peasy';
import TopicsService from './TopicsService';


export const topicsModel = {
    topics: {
        // Data structure
        data: [],
        // Actions
        list: thunk(async (actions) => {
            const service = new TopicsService()
            const data = await service.getAllTopics()
            actions.setData(data)
        }),
        setData: action((state, data) => {
            state.data = data
        }),
    }
}
