
const APIURL = 'http://localhost:3001'

class MessagesService {
    
    async getMessagesByTopicId(topicId) {
        const messages = await fetch(
            `${APIURL}/messages?topicId=${topicId}`);
        return await messages.json();
    }

    async pushNewMessage({ id, message, creator, topicId }) {
        const response = await fetch(`${APIURL}/messages`, {
            method: 'POST',
            body: JSON.stringify({
                id: id, message: message,
                creator: creator, topicId: topicId
            })
        });
        return await response.json();
    }
};

export default MessagesService;