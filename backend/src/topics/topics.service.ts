import { Injectable } from '@nestjs/common';
import { Topics, Topic } from './topics.model';

@Injectable()
export class TopicsService {

    public topics = [
        { id: 'AZERS', title: 'Home', slug: '' },
        { id: 'ERERER', title: 'Legal', slug: 'legal' },
        { id: 'SDFDFSDF', title: 'Economy', slug: 'economy' },
    ];

    findAll(): Topics {
        return this.topics;
    }
    exists(topicId: string): boolean {
        return Boolean(this.topics.find(topic => topic.id === topicId));
    }
    findBySlug(slug: string): Topic {
        return this.topics.find(topic => topic.slug === slug);
    }
}
