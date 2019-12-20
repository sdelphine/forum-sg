const fakeTopic = "legal"

const fakeMessage = {
    id: '1',
    topic: 'legal',
    message: 'First message',
    from: 'Toto',
    at: 'Today at 2:00 PM'
}

const fakeMessageList = [
    { id: '1', topic: 'legal', message: 'First message', from: 'User1', at: 'Today at 2:00 PM' },
    { id: '2', topic: 'legal', message: 'Second message', from: 'User2', at: 'Today at 4:00 PM' },
    { id: '3', topic: 'medical', message: 'First message', from: 'User1', at: 'Tomorrow at 10:00 AM' },
    { id: '4', topic: 'legal', message: 'Third message', from: 'User1', at: 'Tomorrow at 10:00 AM' }
]

export { fakeTopic, fakeMessage, fakeMessageList }