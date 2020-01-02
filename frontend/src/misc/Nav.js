import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ topicsList }) {
    return (
        [...topicsList].map((topic, i) => {
            return <Link to={`/${topic.slug}`} key={i+1}>{topic.title}</Link>
        })
    )
};
