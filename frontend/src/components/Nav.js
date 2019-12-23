import React from 'react';
import { Link } from 'react-router-dom';
import { fakeTopicList } from '../lib/fakeUtils';

export default function Nav() {
    return (
        [...fakeTopicList].map((topic, i) => (
            <Link to={`/${topic}`} key={i}>{topic}</Link>
        ))
    )
};

