import React, { useState, useEffect } from 'react';
import Header from '../misc/Header';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';


function messageIsValid(message, sender) {
    return message && message.startsWith('Bonjour') && sender;
}

export default function CreateMessage({ topic, onCreateMessage } ) {
    const [message, handleMessageChange] = useState("")
    const [sender, changeSender] = useState("")

    const topicsList = useStoreState(states => states.topicsModel.topics.data);
    const fetchTopics = useStoreActions(actions => actions.topicsModel.topics.list);

    useEffect(() => { fetchTopics() }, [])

    const onSendMessage = () => {
        if (messageIsValid(message, sender)) {
            const topicId = topicsList.find(topicTmp => topicTmp.slug === topic)?.id;
            onCreateMessage({ creator: sender, message: message, topicId: topicId });
        }
    }

    return (
        <div>
            <Header topic={topic} />
            <Link className='back-link' to={`/${topic}`}>↩ Back</Link>
            <div className="form">  
                <div className="form-from">
                    <span className="from-text"><br/>From</span>
                    <select className="select-from" name="from" 
                        id="from-select" 
                        onChange={(event) => changeSender(event.target.value)}>
                        <option default value="none">None</option>
                        <option value="User 1">User 1</option>
                        <option value="User 2">User 2</option>
                    </select>
                </div>
                <div>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        required
                        placeholder="Write your message"
                        value={message}
                        onChange={event => handleMessageChange(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="button-send"
                        type="button"
                        onClick={() => onSendMessage()}>
                            <span role="img" aria-label="send">📮</span>Send
                    </button>
                </div>
            </div>
        </div>
    );
}
