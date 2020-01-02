
const APIURL = 'http://localhost:3001'

class TopicsService {
    async getAllTopics() {
        const res = await fetch(`${APIURL}/topics`)
        return await res.json();
    }
};

export default TopicsService;