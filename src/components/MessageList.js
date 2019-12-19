import React, { Component } from 'react';
import Message from '../components/Message';

class MessageList extends Component {    
    render() {
        const messageList = [...this.props.messageList]
        return (
            messageList.map(message => <Message message={message} key={message.id}/>)
        );
    }
}

export default MessageList;