import React, { Component } from 'react';
import Header from '../components/Header';
import MessageList from '../components/MessageList';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <MessageList />
                <a href='/newMessage'>Add a new message</a>
            </div>
        );
    }
}

export default Home;