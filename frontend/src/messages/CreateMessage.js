import React, { useState } from 'react';
import Header from '../misc/Header';

function randomId() {     
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function checkMessage(message, sender, func) {
    if (message && message.startsWith('Bonjour') && sender) {
        func({ id: randomId(), message: message, sender: sender })
    }
}

// TODO when submit, add datetime
export default function CreateMessage({ topic, onCreateMessage } ) {
    const [message, handleMessageChange] = useState("")
    const [sender, changeSender] = useState("")
    onCreateMessage = onCreateMessage || (() => {})

    return (
        <div className="sqd">
            <Header topic={topic} />
            <div className="form">
                <div className="form-from">
                    <span className="from-text">From</span>
                    <select className="select-from" name="from" 
                        id="from-select" 
                        onChange={(event) => changeSender(event.target.value)}>
                        <option default value="none">None</option>
                        <option value="user1">User1</option>
                        <option value="user2">User2</option>
                    </select>
                </div>
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    required
                    placeholder="Write your message"
                    value={message}
                    onChange={event => handleMessageChange(event.target.value)}
                />
                <button
                    className="button-send"
                    type="button"
                    onClick={() => checkMessage(message, sender, (message) => onCreateMessage(message))}>
                    <span role="img" aria-label="send">📮</span>Send
                </button>
            </div>
        </div>
    );

}