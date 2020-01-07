import React from 'react';
import CreateMessage from './CreateMessage';
import { useStoreActions } from 'easy-peasy';

export default function CreateMessagePage({ topic }) {

    const pushMessage = useStoreActions(
        actions => actions.messagesModel.messages.addToTopic)
    
    function onCreateMessage(data) {
        pushMessage({creator: data.creator, topicId: data.topicId, message: data.message})
    }

    return <CreateMessage topic={topic} onCreateMessage={onCreateMessage}/>
}
