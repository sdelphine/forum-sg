import React, { Component } from 'react';
import Message from '../components/Message';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: [
                { id: '1', topic: 'legal', message: 'First message', from: 'Toto', at: 'Today at 2:00 PM' },
                { id: '2', topic: 'legal', message: 'Second message', from: 'Titi', at: 'Today at 4:00 PM' },
                { id: '3', topic: 'legal', message: 'Third message', from: 'Toto', at: 'Tomorrow at 10:00 AM' },
            ],
        }
    }
    
    render() {
        return (
            this.state.message.map(message => <Message message={message} />)
        );
    }
}

export default MessageList;