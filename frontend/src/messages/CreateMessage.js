import React, { useState } from 'react';
import Header from '../misc/Header';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';


function messageIsValid(message, sender) {
    return message && message.startsWith('Bonjour') && sender;
}

export default function CreateMessage({ topic, onCreateMessage } ) {
    const [message, handleMessageChange] = useState("")
    const [sender, changeSender] = useState("")

    const topicsList = useStoreState(states => states.topicsModel.topics.data)
    const topicId = topicsList.filter(topicTmp => topicTmp.slug === topic)[0].id

    const onSendMessage = () => {
        if (messageIsValid(message, sender)) {
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
                        <option value="user1">User1</option>
                        <option value="user2">User2</option>
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
