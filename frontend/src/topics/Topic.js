import React, { useEffect } from 'react';
import Header from '../misc/Header';
import MessageList from '../messages/MessageList';
import { Link } from 'react-router-dom';
import Nav from '../misc/Nav';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function Topic({ topic }) {

    const topicsList = useStoreState(states => states.topicsModel.topics.data);
    const messagesList = useStoreState(states => states.messagesModel.messages.data);
    const fetchTopics = useStoreActions(actions => actions.topicsModel.topics.list);
    const fetchMessages = useStoreActions(actions => actions.messagesModel.messages.getByTopicSlug);

    useEffect(() => { fetchTopics(); fetchMessages(topic); }, [])

    return (
        <div className='topic'>
            <div className="navbar">
                <Nav topicsList={topicsList} />
            </div>
            <Header topic={topic} />
            <MessageList messageList={messagesList} />
            <Link className="messageLink" to={`/${topic}/newMessage`}>
                <span role="img" aria-label="mail">📧</span>Add a new message
            </Link>
        </div>
    )
}
