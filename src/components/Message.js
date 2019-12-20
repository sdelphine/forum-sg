import React from 'react';

export default function Message({ message }) {
    return (
        <div className="message-box">
            <p className="message-at">At {message.at}</p>
            <p className="message-from">From {message.from}</p>
            <p className="message">{message.message}</p>
        </div>)
};