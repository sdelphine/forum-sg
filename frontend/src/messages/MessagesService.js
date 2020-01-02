
const APIURL = 'http://localhost:3001'

class MessagesService {
    
    async getMessagesByTopicId(topicId) {
        const messages = await fetch(`${APIURL}/messages?topicId=${topicId}`);
        return await messages.json();
    }

    async pushNewMessage(message, user) {
        const response = await fetch(`${APIURL}/messages`, {
            method: 'POST',
            body: JSON.stringify(message)
        });
        return response.json();
    }
};

export default MessagesService;