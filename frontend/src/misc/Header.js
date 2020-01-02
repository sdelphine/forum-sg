import React from 'react';

export default function Header({ topic }) {
    return (
        <div className="header">
            <p>Topic: {topic}</p>
        </div>
    )
}