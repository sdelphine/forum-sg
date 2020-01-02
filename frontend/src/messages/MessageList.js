import React from 'react';
import Message from './Message';

export default function MessageList({ messageList }) {
    if(messageList.length > 0) {
        return ([...messageList].map(message => <Message message={message} key={message.id}/>))
    } else {
        return <p>No message found</p>
    }
  
}