import { Injectable } from '@nestjs/common';
import { Topics } from './topics.model';

@Injectable()
export class TopicsService {
    private topics = [
        { id: 'ERERER', title: 'Legal', slug: 'legal' },
        { id: 'SDFDFSDF', title: 'Economy', slug: 'economy' },
    ];

    findAll(): Topics {
        return this.topics;
    }
    exists(topicId: string): boolean {
        return Boolean(this.topics.find(topic => topic.id === topicId));
    }
}
