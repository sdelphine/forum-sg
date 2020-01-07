
const APIURL = 'http://localhost:3001'

class MessagesService {
    
    async getMessagesByTopicId(topicId) {
        const messages = await fetch(
            `${APIURL}/messages?topicId=${topicId}`);
        return await messages.json();
    }

    async pushNewMessage({ message, creator, topicId }) {
        const response = await fetch(`${APIURL}/messages`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                creator: creator, topicId: topicId
            }),
        });
        return await response.json();
    }

    async getMessagesByTopicSlug(slug) {
        const messages = await fetch(
            `${APIURL}/messages?slug=${slug}`);
        return await messages.json();
    }
};

export default MessagesService;