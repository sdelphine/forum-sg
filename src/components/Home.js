import React from 'react';
import Header from '../components/Header';
import MessageList from '../components/MessageList';
import { Link } from 'react-router-dom';

export default function Home( { topic, messageList } ) {
    const messageListFiltered = messageList.filter(message => message.topic === topic)

    return (
        <div className='home'>
            <Header topic={topic}/>
            <MessageList messageList={messageListFiltered}/>
            <Link to={`/${topic}/newMessage`}><span role="img" aria-label="mail">📧</span>Add a new message</Link>
        </div>
    )
}