import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { fakeMessageList } from '../lib/fakeUtils';

export default function Topic({ topic } ) {
    const messageListFiltered = fakeMessageList.filter(message => message.topic === topic)

    return (
        <div className='topic'>
            <div className="navbar">
                <Nav />
            </div>
            <Header topic={topic}/>
            <MessageList messageList={messageListFiltered}/>
            <Link className="messageLink" to={`/${topic}/newMessage`}><span role="img" aria-label="mail">📧</span>Add a new message</Link>
        </div>
    )
}
