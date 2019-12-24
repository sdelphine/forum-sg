import React from 'react';
import Message from './Message';

export default function MessageList({ messageList }) {
    return (
        [...messageList].map(message => <Message message={message} key={message.id}/>)
    );
}