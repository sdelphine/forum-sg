import { Injectable } from "@nestjs/common";
import { Topics } from "./topic.model";

@Injectable()
export class TopicsService {
    private topicTemplate = [
        { id: 'ERERER', title: 'Legal', slug: 'legal' },
        { id: 'SDFDFSDF', title: 'Economy', slug: 'economy' }
    ];
    
    findAll(): Topics {
        return this.topicTemplate;
    }
    exists(topicId: string): boolean {
        return Boolean(this.topicTemplate.find(topic => topic.id === topicId))
    }
}