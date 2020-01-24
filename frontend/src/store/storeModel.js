import { createStore } from 'easy-peasy';
import { topicsModel } from '../topics/TopicsStoreModel';
import { messagesModel } from '../messages/MessagesStoreModel';
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

export const store = createStore(
    {
        topicsModel: topicsModel,
        messagesModel: messagesModel,
    },
    // {
    //     reducerEnhancer: reducer =>
    //         persistReducer(
    //             {
    //                 key: "easypeasystate",
    //                 storage
    //             },
    //             reducer
    //         )
    // }
)

