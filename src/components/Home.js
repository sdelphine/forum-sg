import React, { Component } from 'react';
import Header from '../components/Header';
import MessageList from '../components/MessageList';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        messageList: [
            { id: '1', topic: 'legal', message: 'First message', from: 'Toto', at: 'Today at 2:00 PM' },
            { id: '2', topic: 'legal', message: 'Second message', from: 'Titi', at: 'Today at 4:00 PM' },
            { id: '3', topic: 'legal', message: 'Third message', from: 'Toto', at: 'Tomorrow at 10:00 AM' }
        ]
    }

    render() {
        return (
            <div className='home'>
                <Header />
                <MessageList messageList={this.state.messageList}/>
                <Link to='/newMessage'>📧 Add a new message</Link>
            </div>
        );
    }
}

export default Home;