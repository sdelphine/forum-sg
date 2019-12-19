import { shallow } from 'enzyme';
import Message from '../components/Message';
import React from 'react';

const fakeMessageList = [
    {
        id: '1',
        topic: 'legal',
        message: 'First message',
        from: 'Toto',
        at: 'Today at 2:00 PM',
    },
    {
        id: '2',
        topic: 'legal',
        message: 'Second message',
        from: 'Titi',
        at: 'Today at 4:00 PM'
    },
    {
        id: '3', 
        topic: 'legal',
        message: 'Third message',
        from: 'Toto',
        at: 'Tomorrow at 10:00 AM'
    },
]


